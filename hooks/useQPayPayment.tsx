// hooks/useQPayPayment.ts
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppState, Linking } from "react-native";

type PaymentStatus = "IDLE" | "PENDING" | "PAID" | "FAILED";

type Options = {
  baseURL: string; // ж: https://api.example.com
  checkPath?: string; // default: /api/bill/check
  intervalMs?: number; // default: 6000
  autoCheckOnResume?: boolean; // default: true
};

type CheckResponse = {
  paid_amount?: number | string;
};

export function useQPayPayment(invoiceId?: string | null, opts?: Options) {
  const {
    baseURL,
    checkPath = "/api/bill/check",
    intervalMs = 6000,
    autoCheckOnResume = true,
  } = opts || ({} as Options);

  const [status, setStatus] = useState<PaymentStatus>(
    invoiceId ? "PENDING" : "IDLE"
  );
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // RN орчинд setInterval → number
  const pollRef = useRef<number | null>(null);

  const clearPoll = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const checkOnce = useCallback(async () => {
    if (!invoiceId || !baseURL) return false;
    try {
      setChecking(true);
      setError(null);
      const res = await axios.post<CheckResponse>(`${baseURL}${checkPath}`, {
        invoiceId,
      });
      const paid = Number(res.data?.paid_amount ?? 0) > 0;
      setStatus(paid ? "PAID" : "PENDING");
      return paid;
    } catch (e: any) {
      setError(e?.message || "Шалгах үед алдаа гарлаа");
      return false;
    } finally {
      setChecking(false);
    }
  }, [invoiceId, baseURL, checkPath]);

  const manualCheck = useCallback(async () => {
    const paid = await checkOnce();
    if (paid) clearPoll();
  }, [checkOnce, clearPoll]);

  const startPolling = useCallback(() => {
    if (!invoiceId || pollRef.current) return;
    // Эхлэхдээ нэг удаа хүчээр шалгана
    checkOnce();
    pollRef.current = setInterval(async () => {
      const paid = await checkOnce();
      if (paid) clearPoll();
    }, intervalMs) as unknown as number;
    setStatus("PENDING");
  }, [invoiceId, checkOnce, clearPoll, intervalMs]);

  const stopPolling = useCallback(() => {
    clearPoll();
  }, [clearPoll]);

  useEffect(() => {
    const sub = Linking.addEventListener("url", () => {
      if (autoCheckOnResume) checkOnce();
    });
    return () => sub.remove();
  }, [checkOnce, autoCheckOnResume]);

  useEffect(() => {
    const sub = AppState.addEventListener("change", (st) => {
      if (st === "active" && autoCheckOnResume) checkOnce();
    });
    return () => sub.remove();
  }, [checkOnce, autoCheckOnResume]);

  useEffect(() => {
    clearPoll();
    setStatus(invoiceId ? "PENDING" : "IDLE");
    if (invoiceId) startPolling();
    return clearPoll;
  }, [invoiceId, startPolling, clearPoll]);

  return { status, checking, error, manualCheck, startPolling, stopPolling };
}

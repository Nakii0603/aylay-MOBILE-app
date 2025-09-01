// screens/TravelInterestForm.tsx
import Colors from "@/constants/Colors";
import { questions } from "@/constants/Data";
import { useQPayPayment } from "@/hooks/useQPayPayment";
import { SERVER_URI } from "@/utils/uri";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;
const PRIMARY = "#013632";
const INTRO_HIDE_KEY = "travelIntroHidden";

type AnswerValue = string | string[] | number;

const TravelInterestForm: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: AnswerValue }>({});
  const [loading, setLoading] = useState(false);
  const [invoiceId, setInvoiceId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [chatResponse, setChatResponse] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);

  // Intro modal
  const [introVisible, setIntroVisible] = useState(false);
  const [dontShowAgainIntro, setDontShowAgainIntro] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const hidden = await AsyncStorage.getItem(INTRO_HIDE_KEY);
        if (hidden !== "1") setIntroVisible(true);
      } catch {
        setIntroVisible(true);
      }
    })();
  }, []);

  const closeIntro = async () => {
    try {
      if (dontShowAgainIntro) await AsyncStorage.setItem(INTRO_HIDE_KEY, "1");
    } catch {}
    setIntroVisible(false);
  };

  // ===== Helpers =====
  const question = questions[currentQuestion];

  const isAnswered = (qIndex: number) => {
    const q = questions[qIndex];
    const val = answers[q.id];
    switch (q.type) {
      case "single-choice":
        return typeof val === "string" && val.length > 0;
      case "multi-choice":
        return Array.isArray(val) && val.length > 0;
      case "text":
        return typeof val === "string" && val.trim().length > 0;
      case "number":
        return (
          (typeof val === "number" && !Number.isNaN(val)) ||
          (typeof val === "string" && val.toString().trim().length > 0)
        );
      default:
        return false;
    }
  };

  const allAnswered = useMemo(
    () => questions.every((_, idx) => isAnswered(idx)),
    [answers]
  );

  const next = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion((s) => s + 1);
  };
  const prev = () => {
    if (currentQuestion > 0) setCurrentQuestion((s) => s - 1);
  };
  const goToQuestion = (index: number) => setCurrentQuestion(index);

  // ===== Answer handlers =====
  const handleSelectSingle = (option: string) => {
    const q = questions[currentQuestion];
    setAnswers((prev) => ({ ...prev, [q.id]: option }));
    // Auto-advance for single-choice
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion((s) => s + 1);
  };

  const handleToggleMulti = (option: string) => {
    const q = questions[currentQuestion];
    setAnswers((prev) => {
      const prevVal = prev[q.id];
      let nextArr: string[] = [];
      if (Array.isArray(prevVal)) {
        nextArr = prevVal.includes(option)
          ? prevVal.filter((o) => o !== option)
          : [...prevVal, option];
      } else if (typeof prevVal === "string" && prevVal.length > 0) {
        nextArr = prevVal === option ? [] : [prevVal, option];
      } else {
        nextArr = [option];
      }
      return { ...prev, [q.id]: nextArr };
    });
  };

  const handleInputChange = (text: string) => {
    const q = questions[currentQuestion];
    if (q.type === "number") {
      const numeric = text.replace(/[^\d]/g, "");
      setAnswers((prev) => ({
        ...prev,
        [q.id]: numeric === "" ? "" : Number(numeric),
      }));
    } else {
      setAnswers((prev) => ({ ...prev, [q.id]: text }));
    }
  };

  // ===== CTA logic (under circles) =====
  const primaryCtaLabel = allAnswered ? "Дууссан" : "Дараах";
  const onPrimaryCta = () => {
    if (allAnswered) {
      handleSubmit();
    } else if (isAnswered(currentQuestion)) {
      next();
    }
  };

  // ====== PAYMENT HOOK ======
  const { status, manualCheck } = useQPayPayment(invoiceId, {
    baseURL: SERVER_URI,
    checkPath: "/api/bill/check",
    intervalMs: 6000,
  });

  // AI-г нэг л удаа дуудах хамгаалалт
  const aiRanRef = useRef(false);

  useEffect(() => {
    if (status === "PAID" && !aiRanRef.current) {
      aiRanRef.current = true;
      setIsPaid(true);
      Toast.show({
        type: "success",
        text1: "Амжилттай",
        text2: "Төлбөр төлөгдлөө.",
      });
      handleGpt();
      setModalVisible(true);
    }
  }, [status]);

  // ===== Billing / Chat =====
  const testBill = {
    invoice_code: "GZTEST_INVOICE",
    sender_invoice_no: "1234567",
    invoice_receiver_code: "terminal",
    description: "Aylay",
    sender_branch_code: "Aylay",
    amount: 10,
    callback_url:
      "https://your-server.com/payments/callback?payment_id=1234567",
  };

  const handleSubmit = async () => {
    setLoading(true);
    aiRanRef.current = false; // шинэ invoice бүрт reset
    try {
      const res = await axios.post(`${SERVER_URI}/api/bill/invoice`, testBill, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status !== 200)
        throw new Error(res.data?.error || "Invoice error");

      const invoiceData = res.data;
      setInvoiceId(invoiceData.invoice_id);

      // Банкнуудын жагсаалт руу дамжуулна
      router.push({
        pathname: "/Bank",
        params: {
          qrText: invoiceData.qr_text,
          invoiceId: invoiceData.invoice_id,
          urls: JSON.stringify(invoiceData.urls),
        },
      });
    } catch {
      Toast.show({
        type: "error",
        text1: "Алдаа",
        text2: "Invoice үүсгэхэд алдаа гарлаа.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGpt = async () => {
    const message = questions
      .map((q) => {
        const val = answers[q.id];
        const parsed = Array.isArray(val) ? val.join(", ") : String(val ?? "");
        return `${q.question}\n→ ${parsed}`;
      })
      .join("\n\n");

    setLoading(true);
    setModalVisible(true);

    try {
      const res = await fetch(`${SERVER_URI}/api/chat/chat`, {
        // <-- routeAfterPaid биш
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      const data = await res.json();
      setChatResponse(data.reply);
    } catch (err: any) {
      setChatResponse("Алдаа гарлаа: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShareTrip = async () => {
    if (!chatResponse?.trim()) {
      Toast.show({
        type: "error",
        text1: "Мэдээлэл алга",
        text2: "Маршрут хоосон байна.",
      });
      return;
    }
    const firstLine = chatResponse.split("\n").find((l) => l.trim().length > 0);
    const title =
      (firstLine && firstLine.replace(/[#*-]/g, "").trim().slice(0, 80)) ||
      "Миний аяллын маршрут";

    const creator =
      (typeof params.userId === "string" && params.userId) ||
      "ec45b335-f25e-46fe-b769-1b8d832d60db";

    const payload = { title, text: chatResponse, creator };

    try {
      setShareLoading(true);
      const res = await fetch(`${SERVER_URI}/api/trip/createTrip`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(msg || `HTTP ${res.status}`);
      }

      Toast.show({
        type: "success",
        text1: "Амжилттай хуваалцлаа",
        text2: "Таны маршрут хадгалагдлаа.",
      });
      setModalVisible(false);
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "Хуваалцахад алдаа",
        text2: e?.message || "Дахин оролдоно уу.",
      });
    } finally {
      setShareLoading(false);
    }
  };

  // ===== Render only options/input (no circles/buttons here) =====
  const renderQuestionBodyCore = () => {
    if (question.type === "single-choice") {
      return (
        <View>
          {question.options?.map((opt: string, idx: number) => {
            const selected = answers[question.id] === opt;
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => handleSelectSingle(opt)}
                style={[styles.optionButton, selected && styles.selectedOption]}
              >
                <Text style={{ color: selected ? "#2e7d32" : "#333" }}>
                  {opt}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }

    if (question.type === "multi-choice") {
      const currentVals = Array.isArray(answers[question.id])
        ? (answers[question.id] as string[])
        : [];
      return (
        <View>
          {question.options?.map((opt: string, idx: number) => {
            const selected = currentVals.includes(opt);
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => handleToggleMulti(opt)}
                style={[styles.optionButton, selected && styles.selectedOption]}
              >
                <Text style={{ color: selected ? "#2e7d32" : "#333" }}>
                  {opt}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }

    // text / number
    const val = answers[question.id];
    const display =
      typeof val === "number"
        ? String(val)
        : typeof val === "string"
        ? val
        : "";
    return (
      <View style={styles.inputWrap}>
        <TextInput
          value={display}
          onChangeText={handleInputChange}
          placeholder={question.placeholder || ""}
          placeholderTextColor="#90A4AE"
          keyboardType={question.type === "number" ? "numeric" : "default"}
          style={styles.textInput}
          returnKeyType="done"
          onSubmitEditing={() =>
            allAnswered ? handleSubmit() : isAnswered(currentQuestion) && next()
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.stepText}>
          Асуулт {currentQuestion + 1} / {questions.length}
        </Text>

        <Text style={styles.questionText}>{question.question}</Text>

        {renderQuestionBodyCore()}

        {/* Давталтын тойрог (1..n) */}
        <View style={styles.progressRow}>
          {questions.map((_: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => goToQuestion(index)}
              style={[
                styles.stepCircle,
                currentQuestion === index && styles.activeStep,
                isAnswered(index) && styles.completedStep,
              ]}
            >
              <Text
                style={{
                  color:
                    currentQuestion === index
                      ? "#fff"
                      : isAnswered(index)
                      ? "#0F2E23"
                      : "#333",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Доод нэг мөр навигац */}
        <View style={styles.inlineRow}>
          <TouchableOpacity
            onPress={prev}
            disabled={currentQuestion === 0}
            style={[
              styles.navInlineBtn,
              currentQuestion === 0 && styles.disabledButton,
            ]}
          >
            <Text style={styles.buttonText}>Өмнөх</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPrimaryCta}
            disabled={!allAnswered && !isAnswered(currentQuestion)}
            style={[
              styles.navInlineBtn,
              !allAnswered &&
                !isAnswered(currentQuestion) &&
                styles.disabledButton,
            ]}
          >
            {loading && allAnswered ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                {allAnswered ? "Дууссан" : "Дараах"}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ===== Intro Modal ===== */}
      <Modal
        visible={introVisible}
        transparent
        animationType="fade"
        onRequestClose={closeIntro}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalContent, { maxWidth: 560 }]}>
            <Text style={styles.introTitle}>
              Таны хүсэл, сонирхолд тулгуурласан аяллын зураглал
            </Text>
            <Text style={styles.introText}>
              Энэхүү богино асуулга нь таны аяллын хэв маяг, төсөв, цаг,
              сонирхолд нийцүүлэн{" "}
              <Text style={{ fontWeight: "800" }}>
                зөвхөн танд зориулагдсан маршрут
              </Text>{" "}
              болон зөвлөмжүүдийг гаргаж өгнө.
            </Text>
            <View style={{ height: 10 }} />
            <Text style={styles.introBullet}>
              • Single-choice: дармагц дараагийн асуулт руу автоматаар шилжинэ.
            </Text>
            <Text style={styles.introBullet}>
              • Multi-choice, бичвэр/тоо: доорх “Дараах/Дууссан” товчоор
              шилжинэ.
            </Text>
            <Text style={styles.introBullet}>
              • Дуусмагц төлбөр баталгаажсаны дараа AI маршрут үүсгэнэ.
            </Text>

            <TouchableOpacity
              onPress={() => setDontShowAgainIntro((v) => !v)}
              style={styles.checkboxRow}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.checkboxBox,
                  dontShowAgainIntro && styles.checkboxBoxChecked,
                ]}
              >
                {dontShowAgainIntro ? (
                  <Text style={{ color: "#fff", fontWeight: "900" }}>✓</Text>
                ) : null}
              </View>
              <Text style={styles.checkboxLabel}>Дахин бүү үзүүлэх</Text>
            </TouchableOpacity>

            <View style={[styles.actionRow, { justifyContent: "center" }]}>
              <TouchableOpacity
                onPress={closeIntro}
                style={[
                  styles.actionBtn,
                  { backgroundColor: PRIMARY, maxWidth: 240 },
                ]}
                accessibilityLabel="Эхлэх"
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Эхлэх</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* ===== Result Modal ===== */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {loading ? (
              <ActivityIndicator size="large" color="#00B894" />
            ) : (
              <>
                <Text style={styles.modalTitle}>Таны аяллын маршрут</Text>
                <ScrollView>
                  <Text style={styles.modalText}>{chatResponse}</Text>
                </ScrollView>

                {isPaid ? (
                  <View style={styles.actionRow}>
                    <TouchableOpacity
                      onPress={handleShareTrip}
                      disabled={shareLoading}
                      style={[
                        styles.actionBtn,
                        { backgroundColor: Colors.primaryColor },
                      ]}
                    >
                      {shareLoading ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>
                          Хуваалцах
                        </Text>
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={[styles.actionBtn, { backgroundColor: "#6b7280" }]}
                    >
                      <Text style={{ color: "#fff", fontWeight: "bold" }}>
                        Хаах
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.closeButton}
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Хаах
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1 },
  stepText: {
    fontSize: 15,
    marginBottom: 12,
    fontWeight: "600",
    color: "#647067",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 18,
    color: "#0F2E23",
  },

  optionButton: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D9E2DD",
    marginBottom: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  selectedOption: { backgroundColor: "#E8F5E9", borderColor: "#008000" },

  inputWrap: {
    borderWidth: 1,
    borderColor: "#D9E2DD",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
  },
  textInput: { fontSize: 16, paddingVertical: 10, color: "#0F2E23" },

  progressRow: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 18,
    marginBottom: 12,
    paddingHorizontal: 6,
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "transparent",
  },
  activeStep: { backgroundColor: PRIMARY },
  completedStep: { borderColor: PRIMARY, backgroundColor: "#E6F0EC" },

  inlineRow: { flexDirection: "row", gap: 12, marginTop: 8 },
  navInlineBtn: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: PRIMARY,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  disabledButton: { backgroundColor: "#ccc" },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 15, padding: 2 },

  payBtn: {
    backgroundColor: "#0984e3",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 16,
  },
  payBtnText: { color: "#fff", fontWeight: "700", fontSize: 15 },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 12,
    color: PRIMARY,
    textAlign: "center",
  },
  modalText: { fontSize: 15, color: "#2F4F4F", lineHeight: 22 },
  closeButton: {
    marginTop: 20,
    paddingVertical: 14,
    backgroundColor: PRIMARY,
    borderRadius: 14,
    alignItems: "center",
  },
  actionRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  introTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: PRIMARY,
    textAlign: "center",
    marginBottom: 10,
  },
  introText: {
    fontSize: 15,
    color: "#2F4F4F",
    lineHeight: 22,
    textAlign: "left",
  },
  introBullet: { fontSize: 14, color: "#41534B", marginTop: 4 },
  checkboxRow: { flexDirection: "row", alignItems: "center", marginTop: 16 },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.2,
    borderColor: "#9CA3AF",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxBoxChecked: { backgroundColor: PRIMARY, borderColor: PRIMARY },
  checkboxLabel: { fontSize: 14, color: "#334155" },
});

export default TravelInterestForm;

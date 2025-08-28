// app/trip/[id].tsx
import Colors from "@/constants/Colors";
import { SERVER_URI } from "@/utils/uri";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

type Trip = {
  _id?: string;
  tripId?: string;
  title: string;
  text: string;
  creator?: string;
  createdAt?: string;
};

export default function TripDetail() {
  const { id, userId } = useLocalSearchParams<{
    id: string;
    userId?: string;
  }>();
  const router = useRouter();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrip = async () => {
    try {
      setError(null);
      const res = await fetch(`${SERVER_URI}/api/trip/id/${id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setTrip(data);
    } catch (e: any) {
      setError(e?.message || "Дэлгэрэнгүйг татахад алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrip();
  }, [id]);

  const handleJoin = async () => {
    try {
      setJoining(true);
      const participantId =
        typeof userId === "string"
          ? userId
          : "ec45b335-f25e-46fe-b769-1b8d832d60db";

      const res = await fetch(`${SERVER_URI}/api/trip/id/${id}/participants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: participantId }),
      });
      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(msg || `HTTP ${res.status}`);
      }

      Toast.show({
        type: "success",
        text2: "Та энэ аялалд нэгдлээ.",
      });
    } catch {
      Toast.show({
        type: "error",
        text1: "Одоогоор аялалд нэгдэх боломжгүй байна.",
      });
    } finally {
      setJoining(false);
    }
  };

  const formatDate = (iso?: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    const mm = `${d.getMonth() + 1}`.padStart(2, "0");
    const dd = `${d.getDate()}`.padStart(2, "0");
    return `${d.getFullYear()}.${mm}.${dd}`;
  };

  const initials =
    (trip?.creator || "A")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((s) => s[0]?.toUpperCase() || "")
      .join("") || "A";

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: BG }]}>
        <ActivityIndicator size="large" color={PRIMARY} />
        <Text style={{ marginTop: 8, color: BODY }}>Ачааллаж байна…</Text>
      </View>
    );
  }

  if (error || !trip) {
    return (
      <View style={[styles.center, { backgroundColor: BG }]}>
        <Text style={{ color: "#b91c1c", marginBottom: 8 }}>
          {error || "Маршрут олдсонгүй"}
        </Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>Буцах</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 28 }}>
        {/* HERO / HEADER CARD */}
        <View style={styles.hero}>
          <View style={styles.heroLeft}>
            <View style={styles.avatar}>
              <Text style={{ color: "#fff", fontWeight: "800" }}>
                {initials}
              </Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={2}>
              {trip.title || "Гарчиггүй маршрут"}
            </Text>

            <View style={styles.metaRow}>
              {trip.creator ? (
                <Text style={styles.meta}>
                  @{(trip.creator || "").slice(0, 15)}...
                </Text>
              ) : null}
              {trip.createdAt ? (
                <View style={styles.datePill}>
                  <Text style={styles.datePillText}>
                    {formatDate(trip.createdAt)}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>

        {/* CONTENT CARD */}
        <View style={styles.card}>
          <View style={styles.cardAccent} />
          <Text style={styles.body}>{trip.text || ""}</Text>
        </View>

        {/* ACTIONS */}
        <View style={{ gap: 10 }}>
          <TouchableOpacity
            onPress={handleJoin}
            style={styles.primaryBtn}
            disabled={joining}
          >
            <Text style={{ color: "#fff", fontWeight: "800" }}>
              {joining ? "Нэгдэж байна…" : "Энэ аялалд нэгдэх"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.secondaryBtn}
          >
            <Text style={{ color: PRIMARY, fontWeight: "800" }}>Буцах</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/** Brand-д тааруулсан өнгө палитр */
const PRIMARY = Colors.primaryColor || "#013632"; // гол brand
const ACCENT = Colors.green || "#008000"; // нэмэлт ногоон
const BG = "#F0F7F4"; // цайвар ногоондуу фон
const CARD_BORDER = "#D9E2DD";
const TITLE = "#0F2E23";
const BODY = "#2F4F4F";
const MUTED = "#647067";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  /** HERO */
  hero: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: 14,
  },
  heroLeft: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "900",
    color: TITLE,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  meta: {
    fontSize: 12,
    color: MUTED,
  },
  datePill: {
    backgroundColor: "#EAF4F0",
    borderWidth: 1,
    borderColor: "#DAEAE2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  datePillText: { color: PRIMARY, fontSize: 12, fontWeight: "800" },

  /** CONTENT CARD */
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
    overflow: "hidden",
  },
  cardAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: PRIMARY,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  body: { fontSize: 15, lineHeight: 22, color: BODY },

  /** BUTTONS */
  primaryBtn: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  secondaryBtn: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: PRIMARY,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  /** fallback containers (loading/error) */
  backBtn: {
    backgroundColor: MUTED,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
});

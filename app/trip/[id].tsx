// app/trip/[id].tsx
import { SERVER_URI } from "@/utils/uri";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      Alert.alert("Амжилттай", "Та энэ аялалд нэгдлээ!");
    } catch (e: any) {
      Alert.alert("Алдаа", e?.message || "Нэгдэхэд алдаа гарлаа");
    } finally {
      setJoining(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 8 }}>Ачааллаж байна…</Text>
      </View>
    );
  }

  if (error || !trip) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#b91c1c", marginBottom: 8 }}>
          {error || "Маршрут олдсонгүй"}
        </Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>Буцах</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text style={styles.title}>{trip.title || "Гарчиггүй маршрут"}</Text>

      <View style={styles.metaRow}>
        {trip.creator ? (
          <Text style={styles.meta}>👤 {trip.creator}</Text>
        ) : null}
        {trip.createdAt ? (
          <Text style={styles.meta}>
            🗓 {new Date(trip.createdAt).toLocaleString()}
          </Text>
        ) : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.body}>{trip.text || ""}</Text>
      </View>

      <View style={{ gap: 10 }}>
        <TouchableOpacity
          onPress={handleJoin}
          style={styles.primaryBtn}
          disabled={joining}
        >
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            {joining ? "Нэгдэж байна…" : "Энэ аялалд нэгдэх"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>Буцах</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const PRIMARY = "#6B52EA";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: { fontSize: 20, fontWeight: "800", color: "#111827", marginBottom: 8 },
  metaRow: { flexDirection: "row", gap: 10, marginBottom: 12 },
  meta: { fontSize: 12, color: "#6b7280" },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  body: { fontSize: 15, lineHeight: 22, color: "#111827" },
  primaryBtn: {
    backgroundColor: PRIMARY,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  backBtn: {
    backgroundColor: "#6b7280",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
});

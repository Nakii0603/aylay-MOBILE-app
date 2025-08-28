// app/tabs/joinMe.tsx
import { SERVER_URI } from "@/utils/uri";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Trip = {
  _id?: string;
  tripId?: string; // UUID
  title: string;
  text: string;
  creator?: string;
  createdAt?: string;
};

export default function JoinMe() {
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrips = async () => {
    try {
      setError(null);
      const res = await fetch(`${SERVER_URI}/api/trip/getAllTrip`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setTrips(Array.isArray(data) ? data : data?.items || []);
    } catch (e: any) {
      setError(e?.message || "Аяллуудыг татахад алдаа гарлаа");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTrips();
  }, []);

  const renderItem = ({ item }: { item: Trip }) => {
    const id = item.tripId || item._id!;
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => router.push(`/trip/${id}`)}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {item.title || "Гарчиггүй маршрут"}
          </Text>
          <Text style={styles.cardText} numberOfLines={2}>
            {item.text || ""}
          </Text>
          <View style={styles.metaRow}>
            {item.creator ? (
              <Text style={styles.meta}>👤 {item.creator}</Text>
            ) : null}
            {item.createdAt ? (
              <Text style={styles.meta}>
                🗓 {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 8 }}>Аяллуудыг ачааллаж байна…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#b91c1c", marginBottom: 8 }}>{error}</Text>
        <TouchableOpacity style={styles.retryBtn} onPress={fetchTrips}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>
            Дахин оролдох
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        keyExtractor={(it) => (it.tripId || it._id)!}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.center}>
            <Text>Одоогоор нийтлэгдсэн аялал алга байна.</Text>
          </View>
        }
      />
    </View>
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
  retryBtn: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  cardText: { fontSize: 14, color: "#374151" },
  metaRow: { flexDirection: "row", gap: 10, marginTop: 10 },
  meta: { fontSize: 12, color: "#6b7280" },
});

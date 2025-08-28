// app/tabs/joinMe.tsx
import { SERVER_URI } from "@/utils/uri";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

const PRIMARY = "#008000";
const BG = "#F0F7F4";
const CARD_BORDER = "#ECECF2";
const MUTED = "#6b7280";
const TITLE = "#111827";
const BODY = "#374151";

export default function JoinMe() {
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // UI states
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"new" | "old">("new");

  const fetchTrips = async () => {
    try {
      setError(null);
      const res = await fetch(`${SERVER_URI}/api/trip/getAllTrip`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const list: Trip[] = Array.isArray(data) ? data : data?.items || [];
      setTrips(list);
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? trips.filter(
          (t) =>
            (t.title || "").toLowerCase().includes(q) ||
            (t.text || "").toLowerCase().includes(q) ||
            (t.creator || "").toLowerCase().includes(q)
        )
      : trips;

    return base.sort((a, b) => {
      const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return sort === "new" ? db - da : da - db;
    });
  }, [trips, query, sort]);

  const formatDate = (iso?: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    // yyyy.mm.dd формат
    const mm = `${d.getMonth() + 1}`.padStart(2, "0");
    const dd = `${d.getDate()}`.padStart(2, "0");
    return `${d.getFullYear()}.${mm}.${dd}`;
  };

  const renderItem = ({ item }: { item: Trip }) => {
    const id = item.tripId || item._id!;
    const initials =
      (item.creator || "A")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((s) => s[0]?.toUpperCase() || "")
        .join("") || "A";

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.push(`/trip/${id}`)}
        style={styles.card}
      >
        {/* Left accent bar */}
        <View style={styles.cardAccent} />

        <View style={{ flex: 1 }}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.title || "Гарчиггүй маршрут"}
            </Text>

            {/* Date pill */}
            {item.createdAt ? (
              <View style={styles.datePill}>
                <Text style={styles.datePillText}>
                  {formatDate(item.createdAt)}
                </Text>
              </View>
            ) : null}
          </View>

          <Text style={styles.cardText} numberOfLines={2}>
            {item.text || ""}
          </Text>

          <View style={styles.metaRow}>
            {/* avatar-ish circle with initials */}
            <View style={styles.avatar}>
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 12 }}>
                {initials}
              </Text>
            </View>
            {item.creator ? (
              <Text style={styles.meta}>@{item.creator}</Text>
            ) : (
              <Text style={styles.meta}>Тодорхойгүй зохиогч</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: BG }]}>
        <ActivityIndicator size="large" color={PRIMARY} />
        <Text style={{ marginTop: 8, color: BODY }}>
          Аяллуудыг ачааллаж байна…
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.center, { backgroundColor: BG }]}>
        <StatusBar barStyle="dark-content" backgroundColor={BG} />
        <Text style={{ color: "#b91c1c", marginBottom: 12, fontWeight: "600" }}>
          {error}
        </Text>
        <TouchableOpacity style={styles.primaryBtn} onPress={fetchTrips}>
          <Text style={styles.primaryBtnText}>Дахин оролдох</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BG }}>
      <StatusBar barStyle="dark-content" backgroundColor={BG} />

      {/* List header: Title + Search + Sort pills */}
      <FlatList
        data={filtered}
        keyExtractor={(it) => (it.tripId || it._id)!}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.screenTitle}>Нийтлэгдсэн аяллууд</Text>

            {/* Search */}
            <View style={styles.searchBox}>
              <TextInput
                placeholder="Хайх (гарчиг, бүтээгч, тайлбар)…"
                placeholderTextColor="#A1A1AA"
                value={query}
                onChangeText={setQuery}
                style={styles.searchInput}
                returnKeyType="search"
              />
              {query ? (
                <TouchableOpacity
                  onPress={() => setQuery("")}
                  style={styles.clearBtn}
                >
                  <Text style={{ color: PRIMARY, fontWeight: "700" }}>✕</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {/* Sort pills */}
            <View style={styles.pillsRow}>
              <TouchableOpacity
                onPress={() => setSort("new")}
                style={[styles.pill, sort === "new" && styles.pillActive]}
              >
                <Text
                  style={[
                    styles.pillText,
                    sort === "new" && styles.pillTextActive,
                  ]}
                >
                  Шинэ эхэнд
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSort("old")}
                style={[styles.pill, sort === "old" && styles.pillActive]}
              >
                <Text
                  style={[
                    styles.pillText,
                    sort === "old" && styles.pillTextActive,
                  ]}
                >
                  Хуучин эхэнд
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={[styles.center, { paddingVertical: 48 }]}>
            <View style={styles.illustration}>
              <Text style={{ fontSize: 28 }}>🗺️</Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                color: TITLE,
                fontWeight: "700",
                marginTop: 8,
              }}
            >
              Одоогоор нийтлэгдсэн аялал алга
            </Text>
            <Text style={{ color: MUTED, marginTop: 6, textAlign: "center" }}>
              Та эхний маршрутаа үүсгээд бусадтай хуваалцаарай!
            </Text>
            <TouchableOpacity
              style={[styles.primaryBtn, { marginTop: 14 }]}
              onPress={onRefresh}
            >
              <Text style={styles.primaryBtnText}>Дахин шалгах</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // header
  screenTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: TITLE,
    marginBottom: 10,
  },

  // search
  searchBox: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: BODY,
    paddingVertical: 4,
  },
  clearBtn: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#F2EEFF",
  },

  // pills
  pillsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },
  pill: {
    borderWidth: 1,
    borderColor: CARD_BORDER,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  pillActive: {
    backgroundColor: "#efffeeff",
    borderColor: PRIMARY,
  },
  pillText: { color: BODY, fontWeight: "600", fontSize: 12 },
  pillTextActive: { color: PRIMARY },

  // cards
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: CARD_BORDER,
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    overflow: "hidden",
    flexDirection: "row",
    gap: 12,
  },
  cardAccent: {
    width: 6,
    borderRadius: 8,
    backgroundColor: PRIMARY,
    marginRight: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  cardTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    color: TITLE,
  },
  datePill: {
    backgroundColor: "#efffeeff",
    borderWidth: 1,
    borderColor: "#e1ffe4ff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  illustration: {
    width: 72,
    height: 72,
    borderRadius: 999,
    backgroundColor: "#F2EEFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E7E1FF",
  },
  datePillText: { color: PRIMARY, fontSize: 11, fontWeight: "700" },
  cardText: {
    fontSize: 14,
    color: BODY,
    marginTop: 2,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 999,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  meta: { fontSize: 12, color: MUTED },

  // centers / buttons
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  primaryBtn: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  primaryBtnText: { color: "#fff", fontWeight: "700" },
});

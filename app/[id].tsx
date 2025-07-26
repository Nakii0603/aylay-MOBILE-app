import { aimags } from "@/constants/Data";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function AimagDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const aimagId = Number(id);
  const aimag = aimags.find((a) => a.id === aimagId);

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 60) / 2; // 20 (padding) * 2 + 10 (gap)

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          {/* HEADER IMAGE */}
          {aimag?.source ? (
            <Image
              source={aimag.source}
              style={{ width: "100%", height: 220 }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.noImage}>
              <Text>No Image</Text>
            </View>
          )}

          <View style={styles.container}>
            {/* TITLE + COAT */}
            <View style={styles.titleRow}>
              <Text style={styles.title}>{aimag?.name}</Text>
              <Image
                source={require("@/assets/icons/coat.png")}
                style={styles.coat}
              />
            </View>

            {/* ТОВЧ ТАНИЛЦУУЛГА */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="information-circle" size={18} color="#555" />
                <Text style={styles.sectionTitle}>Товч танилцуулга</Text>
              </View>
              <Text style={styles.description}>{aimag?.description}</Text>
            </View>

            {/* СТАТИСТИК */}
            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Хүн амын тоо</Text>
                <Text style={styles.statValue}>
                  {aimag?.population?.toLocaleString() || "?"}
                </Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Сумын тоо</Text>
                <Text style={styles.statValue}>{aimag?.sum}</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Нийт талбай</Text>
                <Text style={styles.statValue}>{aimag?.area}</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Онцлог</Text>
                <Text style={styles.statValue}>{aimag?.features}</Text>
              </View>
            </View>

            {/* ҮЗЭСГЭЛЭНТ ГАЗРУУД */}
            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
              Үзэсгэлэнт газрууд
            </Text>

            <FlatList
              data={aimag?.naturalSites}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={[styles.card, { width: cardWidth }]}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardDescription}>
                      {item.description || "Тайлбар байхгүй."}
                    </Text>
                  </View>
                </View>
              )}
              ListEmptyComponent={
                <Text style={{ fontStyle: "italic", marginTop: 10 }}>
                  Үзэсгэлэнт газар алга.
                </Text>
              }
            />
          </View>
        </ScrollView>

        <View style={styles.backButtonContainer}>
          <Button title="← Буцах" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  coat: {
    width: 30,
    height: 30,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  statsContainer: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 15,
    justifyContent: "space-between",
  },
  statBox: {
    width: "47%",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
  },
  statLabel: {
    fontSize: 13,
    color: "#888",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginTop: 15,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardImage: {
    width: "100%",
    height: 130,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
  backButtonContainer: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 10,
  },
  noImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});

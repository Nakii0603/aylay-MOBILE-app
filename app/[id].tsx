import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { aimags } from "@/constants/Data";

export default function AimagDetail() {
  const router = useRouter();
  const { id, name, area } = useLocalSearchParams();

  const aimagId = Number(id);
  const aimag = aimags.find((a) => a.id === aimagId);

  return (
    <>
      {/* Header-г бүрэн нуух */}
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{name || aimag?.name || "Аймаг"}</Text>
          <Text style={styles.text}>Аймгийн код: {id}</Text>
          <Text style={styles.text}>
            Газар нутгийн хэмжээ: {area || aimag?.area || "Мэдээлэл алга"}
          </Text>

          <Text style={[styles.text, { marginTop: 20 }]}>
            Үзэсгэлэнт газрууд:
          </Text>

          {aimag && aimag.naturalSites && aimag.naturalSites.length > 0 ? (
            aimag.naturalSites.map((place, index) => (
              <View key={index} style={{ marginTop: 10 }}>
                <Text style={styles.placeName}>• {place.name}</Text>
                <Text style={styles.placeDesc}>{place.description}</Text>
              </View>
            ))
          ) : (
            <Text style={{ fontStyle: "italic", marginTop: 5 }}>
              Мэдээлэл алга.
            </Text>
          )}

          <View style={{ marginTop: 20 }}>
            <Button title="Буцах" onPress={() => router.back()} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "600",
  },
  placeDesc: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    marginLeft: 15,
    marginTop: 2,
  },
});

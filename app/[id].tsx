import { aimags } from "@/constants/Data";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AimagDetail() {
  const router = useRouter();
  const { id, name, area } = useLocalSearchParams();

  const aimagId = Number(id);
  const aimag = aimags.find((a) => a.id === aimagId);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.backButtonContainer}>
          <Button title="← Буцах" onPress={() => router.back()} />
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{name || aimag?.name || "Аймаг"}</Text>
          {/* <Text style={styles.text}>Аймгийн код: {id}</Text> */}
          <Text style={styles.text}>
            Газар нутгийн хэмжээ: {area || aimag?.area || "Мэдээлэл алга"}
          </Text>

          <Text style={[styles.text, { marginTop: 20 }]}>
            Үзэсгэлэнт газрууд:
          </Text>

          {aimag && aimag.naturalSites && aimag.naturalSites.length > 0 ? (
            aimag.naturalSites.map((place, index) => (
              <View key={index} style={styles.placeContainer}>
                {place.image ? (
                  <Image
                    source={{ uri: place.image }}
                    style={styles.placeImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.placeholderImage}>
                    <Text style={{ color: "#999" }}>No Image</Text>
                  </View>
                )}
                <Text style={styles.placeName}>• {place.name}</Text>
                <Text style={styles.placeDesc}>{place.description}</Text>
              </View>
            ))
          ) : (
            <Text style={{ fontStyle: "italic", marginTop: 5 }}>
              Мэдээлэл алга.
            </Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 10,
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  placeContainer: {
    marginTop: 20,
  },
  placeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholderImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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

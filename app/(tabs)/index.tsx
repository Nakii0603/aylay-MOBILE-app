import Colors from "@/constants/Colors";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const { width } = Dimensions.get("window");

  const images = [
    {
      id: 1,
      source: require("@/assets/trash/image.png"),
      name: "Name 1",
      price: "100t",
    },
    {
      id: 2,
      source: require("@/assets/trash/image.png"),
      name: "Name 2",
      price: "200t",
    },
    {
      id: 3,
      source: require("@/assets/trash/image.png"),
      name: "Name 3",
      price: "300t",
    },
    {
      id: 4,
      source: require("@/assets/trash/image.png"),
      name: "Name 4",
      price: "400t",
    },
    {
      id: 5,
      source: require("@/assets/trash/image.png"),
      name: "Name 5",
      price: "500t",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>
            Home
          </Text>
          <Image
            source={require("@/assets/trash/image.png")}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", marginTop: 10 }}
        >
          {images.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={{
                marginLeft: index === 0 ? 0 : 10,
                position: "relative",
                width: width / 3 - 23,
                height: 150,
              }}
              onPress={() =>
                router.push({
                  pathname: "/SurveyInfo",
                  params: { id: item.id.toString(), name: item.name },
                })
              }
            >
              <Image
                source={item.source}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />

              {/* Price Label */}
              {item.price && (
                <Text
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    color: Colors.black,
                    backgroundColor: Colors.white,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 4,
                    fontSize: 12,
                  }}
                >
                  {item.price}
                </Text>
              )}

              {/* Name Label */}
              <View
                style={{
                  position: "absolute",
                  bottom: 5,
                  left: 0,
                  right: 0,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlign: "center",
                    color: Colors.black,
                    backgroundColor: Colors.white,
                    paddingVertical: 2,
                    fontSize: 12,
                    borderRadius: 16,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    flex: 1,
  },
});

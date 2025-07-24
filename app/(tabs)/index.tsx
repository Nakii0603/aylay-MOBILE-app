import Colors from "@/constants/Colors";
import { aimags } from "@/constants/Data";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const { width } = Dimensions.get("window");

  // Жишээ зураг, та өөр зураг ашиглаарай
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
      name: "Name 3",
      price: "300t",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/trash/image.png")}
          style={styles.mainImage}
        />
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {images.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.imageWrapper,
                  { marginLeft: index === 0 ? 0 : 10, width: width / 3 - 23 },
                ]}
                onPress={() =>
                  router.push({
                    pathname: "/SurveyInfo",
                    params: { id: item.id.toString(), name: item.name },
                  })
                }
                activeOpacity={0.8}
              >
                <Image source={item.source} style={styles.itemImage} />

                {/* Price Label */}
                {item.price && (
                  <Text style={styles.priceLabel}>{item.price}</Text>
                )}

                {/* Name Label */}
                <View style={styles.nameLabelContainer}>
                  <Text style={styles.nameLabelText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {aimags.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerBot}
              onPress={() =>
                router.push({
                  pathname: "/[id]",
                  params: {
                    id: item.id.toString(),
                    name: item.name,
                    area: item.area,
                  },
                })
              }
              activeOpacity={0.8}
            >
              <Image
                source={item.source}
                style={styles.logo}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.area}</Text>
              </View>
              <Text style={styles.points}>
                +{item.naturalSites?.length || 0}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  scrollContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 150,
  },
  imageWrapper: {
    position: "relative",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  priceLabel: {
    position: "absolute",
    top: 5,
    left: 5,
    color: Colors.black,
    backgroundColor: Colors.white,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "600",
  },
  nameLabelContainer: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nameLabelText: {
    paddingHorizontal: 10,
    textAlign: "center",
    color: Colors.black,
    backgroundColor: Colors.white,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  containerBot: {
    backgroundColor: "#eafff3",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#fcbf49",
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    marginTop: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  points: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

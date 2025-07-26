import Colors from "@/constants/Colors";
import { aimags, allSurveys } from "@/constants/Data";
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

const images = [
  { image: require("../../assets/images/caroseal1.png") },
  { image: require("../../assets/images/caroseal2.png") },
  { image: require("../../assets/images/caroseal3.png") },
];

export default function Home() {
  const router = useRouter();
  const { width } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eafff3" }}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, borderRadius: 10 }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={img.image}
              style={[styles.mainImage, { width: width - 20 }]}
            />
          ))}
        </ScrollView>

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {allSurveys.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.imageWrapper,
                  { marginLeft: index === 0 ? 0 : 10, width: width / 3 - 23 },
                ]}
                onPress={() =>
                  router.push({
                    pathname: "/SurveyInfo",
                    params: { id: item.id.toString(), name: item.section },
                  })
                }
                activeOpacity={0.8}
              >
                <Image source={item.source} style={styles.itemImage} />

                {/* Name Label */}
                <View style={styles.nameLabelContainer}>
                  <Text style={styles.nameLabelText}>{item.section}</Text>
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
              <Image source={item.source} style={styles.logo} />
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
    height: 300,
    borderRadius: 10,
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
    borderColor: Colors.primaryColor,
    borderWidth: 1,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  nameLabelContainer: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nameLabelText: {
    paddingHorizontal: 6,
    textAlign: "center",
    color: Colors.primaryColor,
    backgroundColor: Colors.white,
    paddingVertical: 4,
    fontSize: 10,
    fontWeight: 500,
    borderRadius: 16,
    overflow: "hidden",
  },
  containerBot: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    marginTop: 10,
    marginHorizontal: 5,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Shadow for Android
    elevation: 5,
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

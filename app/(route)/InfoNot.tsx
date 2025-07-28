import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons"; // For a back arrow icon
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const imageSize = width * 0.8;

const InfoNotFound = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
      </TouchableOpacity>
      <Image
        source={require("@/assets/icons/not.png")}
        style={[styles.image, { width: imageSize, height: imageSize }]}
        resizeMode="contain"
      />
      <Text style={styles.text}>Мэдээлэл олдсонгүй</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 80,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginBottom: 20,
    opacity: 0.4,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});

export default InfoNotFound;

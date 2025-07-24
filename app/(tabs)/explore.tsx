import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const imageSize = width * 0.8; 

const InfoNotFound = () => {
  return (
    <View style={styles.container}>
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

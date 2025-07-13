import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/logo/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.subtitle}>
        Аяллаа хялбар төлөвлө. Монголыг илүү гүн мэдэр.
      </Text>

      {/* Features */}
      <View style={styles.features}>
        <View style={styles.featureItem}>
          <Ionicons name="map-outline" size={28} color="#F4C430" />
          <Text style={styles.featureText}>AI маршрут гаргагч</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="cloud-offline-outline" size={28} color="#F4C430" />
          <Text style={styles.featureText}>Оффлайн горим</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="home-outline" size={28} color="#F4C430" />
          <Text style={styles.featureText}>Нутгийн үйлчилгээ</Text>
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Эхлэх</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  features: {
    marginBottom: 40,
    width: "100%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
  button: {
    backgroundColor: "#F4C430",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 16,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});

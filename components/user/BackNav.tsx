import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function BackNav() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    maxHeight: 30,
    marginTop: 16,
    marginLeft: 16,
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
});

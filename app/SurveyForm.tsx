import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SurveyForm() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Survey Form</Text>
      {/* Put your form here */}

      <Button
        title="Back to Home"
        onPress={() => router.push("/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
});

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SurveyInfo() {
  const router = useRouter();

  // Cast to any to bypass TS error on searchParams
  const searchParams = (router as any).searchParams || {};
  const { id, name } = searchParams;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Survey Info</Text>
      <Text style={styles.text}>ID: {id ?? "N/A"}</Text>
      <Text style={styles.text}>Name: {name ?? "N/A"}</Text>

      <Button
        title="Go to Survey Form"
        onPress={() => router.push("/SurveyForm")}
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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

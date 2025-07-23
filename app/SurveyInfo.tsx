import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Colors from "@/constants/Colors";

export default function SurveyInfo() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();

  // Dummy data for survey info
  const survey = {
    id,
    name,
    description:
      "Help us improve our service by answering a few quick questions.",
    questionCount: 10,
    image: require("@/assets/trash/image.png"), // You can update per id if needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{survey.name}</Text>

      <Image source={survey.image} style={styles.image} />

      <Text style={styles.description}>{survey.description}</Text>

      <Text style={styles.count}>{survey.questionCount} Questions</Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Start Survey"
          color={Colors.primary}
          onPress={() =>
            router.push({
              pathname: "/SurveyForm",
              params: { surveyId: id?.toString() ?? "" },
            })
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.white,
    alignItems: "center",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: Colors.black,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
    resizeMode: "cover",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: Colors.darkGray,
  },
  count: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    color: Colors.black,
  },
  buttonWrapper: {
    width: "100%",
  },
});

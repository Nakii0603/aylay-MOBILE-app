import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons"; // For a back arrow icon
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SurveyInfo() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();

  // Dummy data for survey info
  const survey = {
    id,
    name,
    description:
      "Та өөрийгөө байгалийн хатуу ширүүн нөхцөлд хэрхэн авч явах вэ гэдгийг мэдэхийг хүсч байна уу? Энэхүү сонирхолтой асуулга нь таны амьд үлдэх ур чадвар, бодит нөхцөлд хэрхэн зөв шийдвэр гаргах чадварыг шалгана.",
    questionCount: 10,
    image: require("@/assets/trash/image.png"),
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.title}>{survey.name}</Text>

        <Image source={survey.image} style={styles.image} />

        <Text style={styles.description}>{survey.description}</Text>

        <Text style={styles.count}>{survey.questionCount} асуулт</Text>

        <View style={styles.buttonWrapper}>
          <Button
            title="Судалгаа эхлүүлэх"
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    flexGrow: 1,
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 16,
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

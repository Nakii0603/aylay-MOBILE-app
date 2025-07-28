import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "1. Aylay апп яг ямар зориулалттай вэ?",
    answer:
      "Aylay нь аялал зохион байгуулах, маршрут гаргах, аяллын түншүүдтэй холбох апп юм.",
  },
  {
    question: "2. Интернетгүй үед ажилладаг уу?",
    answer:
      "Апп-ийн зарим функц интернетгүй ажиллаж болох ч ихэнх хэсэг нь интернет шаарддаг.",
  },
  {
    question:
      "3. Aylay дээр найзуудтайгаа аяллын төлбөрийг хуваах боломжтой юу?",
    answer:
      "Тийм, Aylay дээр найзуудтайгаа төлбөрөө хуваах, хамт төлөвлөх боломжтой.",
  },
  {
    question: "4. Aylay апп-аар даатгалд хамрагдаж болох уу?",
    answer:
      "Болно. Aylay нь аяллын даатгалын үйлчилгээтэй холбогдсон тул апп-аар дамжуулан даатгалд амархан хамрагдах боломжтой.",
  },
  {
    question: "5. Апп дээрх маршрут болон аялал төлөвлөлт хэрхэн ажилладаг вэ?",
    answer:
      "Та сонирхсон газруудаа сонгон маршрут үүсгэж, автомат төлөвлөлт хийнэ.",
  },
];

const FAQScreen: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggleAnswer = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
      </TouchableOpacity>
        <Text style={styles.title}>Асуулт хариулт</Text>
        {FAQ_DATA.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity
              onPress={() => toggleAnswer(index)}
              style={styles.questionBox}
            >
              <Text style={styles.questionText}>{item.question}</Text>
              <Text style={styles.arrow}>
                {activeIndex === index ? "▲" : "▼"}
              </Text>
            </TouchableOpacity>
            {activeIndex === index && (
              <View style={styles.answerBox}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 16,
  },
  card: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  questionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  arrow: {
    fontSize: 18,
    color: "#888",
    marginLeft: 10,
  },
  answerBox: {
    paddingVertical: 8,
  },
  answerText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});

export default FAQScreen;

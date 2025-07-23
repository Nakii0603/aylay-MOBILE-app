import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
} from "react-native";
import { SERVER_URI } from "@/utils/uri";

interface QuestionType {
  id: number;
  question: string;
  options: string[];
}

const questions: QuestionType[] = [
  {
    id: 1,
    question: "Хаашаа аялахыг хүсэж байна вэ?",
    options: ["Уул, ой", "Нуур, гол", "Хот дотор", "Түүхэн дурсгалт газар"],
  },
  {
    id: 2,
    question: "Хэнтэй аялмаар байна вэ?",
    options: [
      "Найзуудтайгаа",
      "Ганцаараа",
      "Гэр бүлтэйгээ",
      "Ажлын хамт олонтой",
    ],
  },
  {
    id: 3,
    question: "Ямар төрлийн аялал илүү сонирхолтой вэ?",
    options: ["Адал явдалт", "Амралтын", "Соёлын", "Байгалийн"],
  },
  {
    id: 4,
    question: "Аялах хугацаа хэдэн хоног байх нь тохиромжтой вэ?",
    options: ["1 өдөр", "2-3 өдөр", "4-5 өдөр", "7+ өдөр"],
  },
  {
    id: 5,
    question: "Аялахад зарцуулах төсөв (₮)?",
    options: ["100к хүртэл", "100к–300к", "300к–600к", "600к+"],
  },
  {
    id: 6,
    question: "Таны амьдардаг газар?",
    options: ["Улаанбаатар", "Дархан", "Эрдэнэт", "Бусад аймаг"],
  },
  {
    id: 7,
    question: "Аялахад хамгийн тохиромжтой улирал?",
    options: ["Хавар", "Зун", "Намар", "Өвөл"],
  },
  {
    id: 8,
    question: "Аялах зай хэр хол байвал тохиромжтой вэ?",
    options: ["50км дотор", "100км дотор", "300км дотор", "300км+"],
  },
  {
    id: 9,
    question: "Дотоод аялалд хамгийн чухал зүйл юу вэ?",
    options: ["Үнэ", "Аюулгүй байдал", "Байгаль орчин", "Үйлчилгээний чанар"],
  },
  {
    id: 10,
    question: "Ямар тээврийн хэрэгсэл илүү тохиромжтой вэ?",
    options: ["Хувийн машин", "Аяллын автобус", "Галт тэрэг", "Онгоц"],
  },
];

const TravelInterestForm: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelect = (option: string) => {
    const questionId = questions[currentQuestion].id;
    setAnswers({ ...answers, [questionId]: option });
  };

  const next = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const handleSubmit = async () => {
    const message = Object.entries(answers)
      .map(([id, ans]) => {
        const question = questions.find((q) => q.id === Number(id));
        return question ? `${question.question}\n→ ${ans}` : "";
      })
      .join("\n\n");

    setLoading(true);
    setModalVisible(true);

    try {
      const res = await fetch(`${SERVER_URI}/api/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setChatResponse(data.reply);
    } catch (error) {
      console.error("Error sending to GPT:", error);
      setChatResponse("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
    }
  };

  const question = questions[currentQuestion];

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.stepText}>
          Асуулт {currentQuestion + 1} / {questions.length}
        </Text>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.options.map((opt, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handleSelect(opt)}
            style={[
              styles.optionButton,
              answers[question.id] === opt && styles.selectedOption,
            ]}
          >
            <Text
              style={{
                color: answers[question.id] === opt ? "#2e7d32" : "#333",
              }}
            >
              {opt}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.progressRow}>
          {questions.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => goToQuestion(index)}
              style={[
                styles.stepCircle,
                currentQuestion === index && styles.activeStep,
              ]}
            >
              <Text
                style={{
                  color: currentQuestion === index ? "#fff" : "#333",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={prev}
            disabled={currentQuestion === 0}
            style={[
              styles.navButton,
              currentQuestion === 0 && styles.disabledButton,
            ]}
          >
            <Text style={styles.buttonText}>Өмнөх</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={next}
            disabled={currentQuestion === questions.length - 1}
            style={[
              styles.navButton,
              currentQuestion === questions.length - 1 && styles.disabledButton,
            ]}
          >
            <Text style={styles.buttonText}>Дараах</Text>
          </TouchableOpacity>
        </View>

        {currentQuestion === questions.length - 1 && (
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.navButton, { marginTop: 20 }]}
          >
            <Text style={styles.buttonText}>Илгээх</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {loading ? (
              <ActivityIndicator size="large" color="#00B894" />
            ) : (
              <>
                <Text style={styles.modalTitle}>GPT санал</Text>
                <ScrollView>
                  <Text style={styles.modalText}>{chatResponse}</Text>
                </ScrollView>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Хаах
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  stepText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
    color: "#888",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  optionButton: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  selectedOption: {
    backgroundColor: "#E8F5E9",
    borderColor: "#00B894",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    padding: 12,
    backgroundColor: "#00B894",
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  progressRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  activeStep: {
    backgroundColor: "#00B894",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#00B894",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default TravelInterestForm;

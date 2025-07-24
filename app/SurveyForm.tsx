import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const questions = [
  {
    id: 1,
    title: "Зэрлэг Байгальд Амьд Үлдэх Чадвар",
    questions: [
      {
        question: "Төөрвөл хамгийн түрүүнд юу хийх вэ?",
        options: [
          { label: "Утас ашиглан тусламж дуудах", score: 1 },
          { label: "Амьсгал авч тайвшрах", score: 2 },
          { label: "Сүүлчийн чиглэлээ тогтоох", score: 3 },
          { label: "Гэр орчмоо эрэлхийлэх", score: 4 },
        ],
      },
      {
        question: "Ойд гал гаргах хамгийн энгийн арга юу вэ?",
        options: [
          { label: "Хатаасан модыг үрж үрж гал гаргах", score: 4 },
          { label: "Гэрлийн тусгал ашиглах", score: 2 },
          { label: "Зоригтой чулуугаар үсрэх", score: 1 },
          { label: "Хөнгөн цагаан зүйл ашиглах", score: 3 },
        ],
      },
      {
        question: "Байгалд хамгийн амархан олддог хоол юу вэ?",
        options: [
          { label: "Үр тариа", score: 1 },
          { label: "Үхрийн мах", score: 2 },
          { label: "Жимс жимсгэнэ", score: 3 },
          { label: "Загас", score: 4 },
        ],
      },
      {
        question: "Усыг аюулгүй болгохын тулд юу хийх вэ?",
        options: [
          { label: "Шууд уух", score: 1 },
          { label: "Буцалгах", score: 4 },
          { label: "Шүүлтүүрээр шүүх", score: 3 },
          { label: "Хөгцтэй газраас хол байх", score: 2 },
        ],
      },
      {
        question: "Анхны тусламжийн багцад юу заавал байх ёстой вэ?",
        options: [
          { label: "Хавчаар", score: 1 },
          { label: "Халуун ус", score: 2 },
          { label: "Халуурдаг эм", score: 3 },
          { label: "Хавдсан тасалгаа", score: 4 },
        ],
      },
      {
        question: "Хоноглох газраа хэрхэн сонгох вэ?",
        options: [
          { label: "Нилээд тайван, ус ойрхон", score: 3 },
          { label: "Тэнгэр үзэгдэх газар", score: 2 },
          { label: "Хаашаа салхи үлээж байгааг харах", score: 4 },
          { label: "Хажуугаар зам өнгөрдөг газар", score: 1 },
        ],
      },
      {
        question: "Зэрлэг амьтнаас хэрхэн хамгаалах вэ?",
        options: [
          { label: "Чимээ гаргах", score: 4 },
          { label: "Ганцаараа аялах", score: 1 },
          { label: "Тасалгааны гэртэй байх", score: 3 },
          { label: "Өөрийгөө жижиг харагдуулах", score: 2 },
        ],
      },
      {
        question: "Хөлдсөн үед юу түрүүлж дулаацуулдаг вэ?",
        options: [
          { label: "Гараа", score: 1 },
          { label: "Нуруу", score: 2 },
          { label: "Хөл", score: 4 },
          { label: "Толгой", score: 3 },
        ],
      },
      {
        question: "Байгальд дохио өгөх хамгийн энгийн арга юу вэ?",
        options: [
          { label: "Гал гаргаж утаа гаргах", score: 4 },
          { label: "Чимээ гаргах", score: 3 },
          { label: "Гар дохио өгөх", score: 2 },
          { label: "Чичирхийлэх", score: 1 },
        ],
      },
      {
        question: "Салхи болон нарны чиглэлээр байрлал тогтоох уу?",
        options: [
          { label: "Нарны байрлал ашиглах", score: 4 },
          { label: "Салхины дуу сонсох", score: 3 },
          { label: "Үнэрээр чиглэлээ мэдэх", score: 1 },
          { label: "Тэнгэрийн од ашиглах", score: 2 },
        ],
      },
    ],
  },

  // Add next sections in same structure here...

  // For brevity, you can add more sections/questions here as needed.
];

export default function SurveyForm() {
  const allQuestions = questions.flatMap((section) => section.questions);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(allQuestions.length).fill(null));

  const currentQuestion = allQuestions[currentIndex];

  function selectOption(index: number) {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
  }

  function calculateMaxScore() {
    return allQuestions.reduce((sum, question) => {
      const maxOptionScore = Math.max(...question.options.map((o) => o.score));
      return sum + maxOptionScore;
    }, 0);
  }
  function handleNext() {
    if (answers[currentIndex] === null) {
      alert("Та сонголтоо хийнэ үү");
      return;
    }
    if (currentIndex < allQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Submit logic here
      const totalScore = answers.reduce((sum, answerIndex) => {
        if (answerIndex === null) return sum;
        const optionScore = currentQuestion.options[answerIndex].score;
        return sum + optionScore;
      }, 0);
      calculateMaxScore();

      Alert.alert(
        "Төгсгөл",
        `Таны нийт оноо: ${calculateMaxScore()} / ${calculateTotalScore()}`,
        [{ text: "OK" }]
      );
    }
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }

  // We need to sum all scores properly, not just current question's option:
  function calculateTotalScore() {
    return answers.reduce((sum, answerIndex, idx) => {
      if (answerIndex === null) return sum;
      return sum + allQuestions[idx].options[answerIndex].score;
    }, 0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Аялагч хүний сорил</Text>
      <Text style={styles.questionCounter}>
        Асуулт {currentIndex + 1} / {allQuestions.length}
      </Text>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>

      <ScrollView style={{ marginVertical: 20 }}>
        {currentQuestion.options.map((option, idx) => {
          const selected = answers[currentIndex] === idx;
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.optionButton, selected && styles.selectedOption]}
              onPress={() => selectOption(idx)}
            >
              <Text
                style={[
                  styles.optionText,
                  selected && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.buttonRow}>
        {currentIndex > 0 ? (
          <>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <TouchableOpacity onPress={handleBack} style={styles.navButton}>
                <Text style={styles.navButtonText}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={handleNext}
                style={[
                  styles.navButton,
                  !answers[currentIndex] && styles.disabledButton,
                ]}
                disabled={answers[currentIndex] === null}
              >
                <Text style={styles.navButtonText}>
                  {currentIndex === allQuestions.length - 1 ? "Submit" : "Next"}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={handleNext}
              style={[
                styles.navButton,
                !answers[currentIndex] && styles.disabledButton,
              ]}
              disabled={answers[currentIndex] === null}
            >
              <Text style={styles.navButtonText}>
                {currentIndex === allQuestions.length - 1 ? "Submit" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionCounter: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  questionText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "600",
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 14,
    marginVertical: 6,
  },
  selectedOption: {
    backgroundColor: "#4caf50",
    borderColor: "#4caf50",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  selectedOptionText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  navButton: {
    backgroundColor: "#2196f3",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  navButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: "#aaa",
  },
});

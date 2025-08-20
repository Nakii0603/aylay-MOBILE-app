import BackNav from "@/components/user/BackNav";
import Colors from "@/constants/Colors";
import { allSurveys, result } from "@/constants/Data";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// --- Төрлийн тодорхойлолтууд ---
type AnswerOption = {
  text: string;
  score: number | string;
  value?: string;
};

type Question = {
  question: string;
  answers: AnswerOption[];
};

type Survey = {
  id: number;
  section: string;
  questions: Question[];
};

type ScoreRange = {
  range: string;
  conclusion: string;
};

type FrequencyResult = {
  choice: string;
  conclusion: string;
};

type ResultEntry = {
  title: string;
  scoreRanges?: ScoreRange[];
  frequencyResults?: FrequencyResult[];
  note?: string;
};

type ResultMap = {
  [key: string]: ResultEntry;
};

// ----------------------------------

export default function SurveyForm() {
  const { surveyId } = useLocalSearchParams<{ surveyId?: string }>();

  const selectedSurvey: Survey | undefined = allSurveys.find(
    (survey) => survey.id.toString() === surveyId
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(selectedSurvey?.questions.length || 0).fill(null)
  );
  const [showResult, setShowResult] = useState<boolean>(false);
  const [totalScore, setTotalScore] = useState<number>(0);

  if (!selectedSurvey) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red" }}>Судалгаа олдсонгүй!</Text>
      </View>
    );
  }

  const questions: Question[] = selectedSurvey.questions;
  const currentQuestion: Question = questions[currentIndex];

  function selectOption(index: number) {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
  }

  function calculateTotalScore(): number {
    return answers.reduce((sum: number, answerIndex, idx) => {
      if (answerIndex === null) return sum;
      const score = questions[idx].answers[answerIndex].score;
      return sum + Number(score);
    }, 0);
  }

  function handleNext() {
    if (answers[currentIndex] === null) {
      alert("Та сонголтоо хийнэ үү");
      return;
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const total = calculateTotalScore();
      setTotalScore(total);
      setShowResult(true);
    }
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }

  function getConclusion(): string {
    const resultMap: ResultMap = result.results;
    const surveyResult = resultMap[surveyId || ""];
    if (!surveyResult) return "Дүгнэлт олдсонгүй.";

    if (surveyResult.scoreRanges) {
      for (let range of surveyResult.scoreRanges) {
        const [min, max] = range.range.split("–").map(Number);
        if (totalScore >= min && totalScore <= max) {
          return range.conclusion;
        }
      }
    }

    if (surveyResult.frequencyResults) {
      const choiceCounts: Record<string, number> = {};
      answers.forEach((answerIndex, idx) => {
        if (answerIndex !== null) {
          const choiceLetter =
            questions[idx].answers[answerIndex].value?.toUpperCase();
          if (choiceLetter) {
            choiceCounts[choiceLetter] = (choiceCounts[choiceLetter] || 0) + 1;
          }
        }
      });

      const mostFrequent = Object.entries(choiceCounts).sort(
        (a, b) => b[1] - a[1]
      )[0]?.[0];

      const found = surveyResult.frequencyResults.find(
        (item) => item.choice === mostFrequent
      );

      return found?.conclusion || "Дүгнэлт олдсонгүй.";
    }

    return "Тохирох дүгнэлт олдсонгүй.";
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <BackNav />
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor}
        />
        <Text style={styles.title}>{selectedSurvey.section}</Text>
        <Text style={styles.questionCounter}>
          Асуулт {currentIndex + 1} / {questions.length}
        </Text>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        <ScrollView style={{ marginVertical: 20, maxHeight: 250 }}>
          {currentQuestion.answers.map((option, idx) => {
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
                  {option.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.buttonRow}>
          {currentIndex > 0 && (
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <TouchableOpacity onPress={handleBack} style={styles.navButton}>
                <Text style={styles.navButtonText}>Өмнөх</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={handleNext}
              style={[
                styles.navButton,
                answers[currentIndex] === null && styles.disabledButton,
              ]}
              disabled={answers[currentIndex] === null}
            >
              <Text style={styles.navButtonText}>
                {currentIndex === questions.length - 1 ? "Дуусгах" : "Дараах"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={showResult}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowResult(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>🎉 Таны Дүгнэлт</Text>
              <Text style={styles.resultText}>{getConclusion()}</Text>
              <Text style={styles.note}>Нийт оноо: {totalScore}</Text>
              <TouchableOpacity
                onPress={() => setShowResult(false)}
                style={[styles.navButton, { marginTop: 20 }]}
              >
                <Text style={styles.navButtonText}>Хаах</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------- Styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
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
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
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
    backgroundColor: Colors.primaryColor,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    textAlign: "center",
  },
  note: {
    fontSize: 14,
    color: "#777",
    marginTop: 10,
  },
});

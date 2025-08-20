import Colors from "@/constants/Colors";
import { questions } from "@/constants/Data";
import { SERVER_URI } from "@/utils/uri";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const SCREEN_WIDTH = Dimensions.get("window").width;

const TravelInterestForm: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(false);
  const [invoiceId, setInvoiceId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [chatResponse, setChatResponse] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  // Animation value for slide
  const animation = useRef(new Animated.Value(0)).current;

  // Animate slide from left or right
  const animateTransition = (direction: "next" | "prev") => {
    animation.setValue(direction === "next" ? SCREEN_WIDTH : -SCREEN_WIDTH);
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleSelect = (option: string) => {
    const questionId = questions[currentQuestion].id;
    setAnswers({ ...answers, [questionId]: option });
  };

  const next = () => {
    if (currentQuestion < questions.length - 1) {
      animateTransition("next");
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prev = () => {
    if (currentQuestion > 0) {
      animateTransition("prev");
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index: number) => {
    const direction = index > currentQuestion ? "next" : "prev";
    animateTransition(direction);
    setCurrentQuestion(index);
  };

  const testBill = {
    invoice_code: "GZTEST_INVOICE",
    sender_invoice_no: "1234567",
    invoice_receiver_code: "terminal",
    description: "Aylay",
    sender_branch_code: "SALBAR1",
    amount: 10,
    callback_url: "https://bd5492c3ee85.ngrok.io/payments?payment_id=1234567",
  };

  const checkPaymentStatus = async () => {
    if (!invoiceId) return;

    try {
      const res = await axios.post(`${SERVER_URI}/api/bill/check`, {
        invoiceId,
      });

      if (res.status !== 200) {
        throw new Error(res.data?.error || "Төлбөр шалгахад алдаа гарлаа");
      }

      if (res.data.paid_amount > 0) {
        setIsPaid(true);
        Toast.show({
          type: "success",
          text1: "Амжилттай",
          text2: "Төлбөр төлөгдсөн байна.",
        });

        await handleGpt();
      } else {
        Toast.show({
          type: "error",
          text1: "Анхаар!",
          text2: "Төлбөр хийгдээгүй байна.",
        });
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Алдаа",
        text2: "Төлбөр шалгах үед алдаа гарлаа.",
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${SERVER_URI}/api/bill/invoice`, testBill, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) {
        throw new Error(res.data?.error || "Invoice error");
      }

      const invoiceData = res.data;
      setInvoiceId(invoiceData.invoice_id);

      router.push({
        pathname: "/Bank",
        params: {
          qrText: invoiceData.qr_text,
          invoiceId: invoiceData.invoice_id,
          urls: JSON.stringify(invoiceData.urls),
        },
      });
    } catch {
      Toast.show({
        type: "error",
        text1: "Алдаа",
        text2: "Invoice үүсгэхэд алдаа гарлаа.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGpt = async () => {
    const message = Object.entries(answers)
      .map(([id, ans]) => {
        const question = questions.find((q) => q.id === Number(id));
        return question ? `${question.question}\n→ ${ans}` : "";
      })
      .join("\n\n");

    setLoading(true);
    setModalVisible(true);

    try {
      const res = await fetch(`${SERVER_URI}/api/chat/chat`, {
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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundColor}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.stepText}>
          Асуулт {currentQuestion + 1} / {questions.length}
        </Text>

        <Animated.View
          style={{
            transform: [{ translateX: animation }],
          }}
        >
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
        </Animated.View>

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

          {Object.keys(answers).length === questions.length ? (
            <TouchableOpacity onPress={handleSubmit} style={styles.navButton}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Илгээх</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={next}
              disabled={currentQuestion === questions.length - 1}
              style={[
                styles.navButton,
                currentQuestion === questions.length - 1 &&
                  styles.disabledButton,
              ]}
            >
              <Text style={styles.buttonText}>Дараах</Text>
            </TouchableOpacity>
          )}
        </View>

        {invoiceId && !isPaid && (
          <TouchableOpacity
            onPress={checkPaymentStatus}
            style={[
              styles.navButton,
              { marginTop: 20, backgroundColor: "#0984e3" },
            ]}
          >
            <Text style={styles.buttonText}>Төлбөр шалгах</Text>
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
                <Text style={styles.modalTitle}>Таны аяллын маршрут</Text>
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
    marginTop: 50,
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
    borderColor: Colors.primaryColor,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    padding: 12,
    backgroundColor: Colors.primaryColor,
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
    justifyContent: "space-between",
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  activeStep: {
    backgroundColor: Colors.primaryColor,
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
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default TravelInterestForm;

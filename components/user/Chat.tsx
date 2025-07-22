import { SERVER_URI } from "@/utils/uri";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Сайн байна уу! Танд хэрхэн туслах вэ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newMessages = [...messages, { role: "user", content: trimmedInput }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${SERVER_URI}/api/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedInput }),
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();

      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Алдаа гарлаа. Дахин оролдоно уу." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.chatBox}
          contentContainerStyle={styles.chatContent}
          ref={scrollViewRef}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.message,
                msg.role === "user" ? styles.userMsg : styles.assistantMsg,
              ]}
            >
              <Text style={styles.messageText}>{msg.content}</Text>
            </View>
          ))}
          {loading && (
            <ActivityIndicator
              size="small"
              color="#4B5563"
              style={{ margin: 10 }}
            />
          )}
        </ScrollView>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Асуух зүйлээ бичнэ үү..."
            onSubmitEditing={sendMessage}
            returnKeyType="send"
            editable={!loading}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
            disabled={loading}
          >
            <Text style={styles.sendButtonText}>Илгээх</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    marginBottom: 80,
  },
  innerContainer: {
    flex: 1,
  },
  chatBox: {
    flex: 1,
  },
  chatContent: {
    paddingVertical: 10,
  },
  message: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userMsg: {
    backgroundColor: "#3B82F6",
    alignSelf: "flex-end",
  },
  assistantMsg: {
    backgroundColor: "#E5E7EB",
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#111827",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  sendButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginLeft: 8,
  },
  sendButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

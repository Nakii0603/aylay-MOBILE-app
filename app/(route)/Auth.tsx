import Colors from "@/constants/Colors";
import { SERVER_URI } from "@/utils/uri";
// import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";

const AuthScreen: React.FC = () => {
  //   const navigation = useNavigation();
  const [isLoginView, setIsLoginView] = useState(true);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    repassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleToggle = () => {
    setIsLoginView(!isLoginView);
    setStep(1);
    setFormData({ email: "", otp: "", password: "", repassword: "" });
    setLoginData({ email: "", password: "" });
  };

  const handleOnChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = async () => {
    setLoading(true);
    try {
      if (step === 1) {
        const res = await axios.post(`${SERVER_URI}/api/otp/send-otp`, {
          email: formData.email,
        });
        console.log(res.data);

        if (res.data.message === "OTP sent successfully to your email") {
          Toast.show({ type: "success", text1: "OTP имэйл рүү илгээгдлээ" });
          setOtpSent(true);
          setStep(2);
        } else {
          Toast.show({ type: "error", text1: "OTP илгээхэд алдаа гарлаа" });
        }
      } else if (step === 2) {
        const res = await axios.post(`${SERVER_URI}/api/otp/verify-otp`, {
          email: formData.email,
          otp: formData.otp,
        });

        if (res.data.message === "OTP verified successfully") {
          Toast.show({ type: "success", text1: "OTP баталгаажлаа" });
          setStep(3);
        } else {
          Toast.show({ type: "error", text1: "OTP буруу байна" });
        }
      } else if (step === 3) {
        if (!formData.password || !formData.repassword) {
          Toast.show({
            type: "error",
            text1: "Нууц үг хоёуланг нь оруулна уу",
          });
          return;
        }
        if (formData.password !== formData.repassword) {
          Toast.show({ type: "error", text1: "Нууц үг таарахгүй байна" });
          return;
        }

        const res = await axios.post(`${SERVER_URI}/api/auth/register`, {
          email: formData.email,
          password: formData.password,
        });

        if (res.data.message === "User registered successfully") {
          Toast.show({ type: "success", text1: "Бүртгэл амжилттай!" });
          handleToggle(); // switch to login
        } else {
          Toast.show({ type: "error", text1: "Имэйл бүртгэлтэй байна" });
        }
      }
    } catch {
      Toast.show({ type: "error", text1: "Алдаа гарлаа. Дахин оролдоно уу." });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    const { email, password } = loginData;

    if (!email || !password) {
      Toast.show({ type: "error", text1: "Бүх талбарыг бөглөнө үү" });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${SERVER_URI}/api/auth/login`, {
        email,
        password,
      });
      console.log(res.data);

      const { message, token } = res.data;

      if (message === "Login successful" && token) {
        Toast.show({ type: "success", text1: "Амжилттай нэвтэрлээ" });
        // Save token
        // navigation.navigate("Dashboard" as never);
      } else {
        Toast.show({ type: "error", text1: "Имэйл эсвэл нууц үг буруу байна" });
      }
    } catch {
      Toast.show({ type: "error", text1: "Нэвтрэхэд алдаа гарлаа" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <Toast />
      <Image
        source={require("@/assets/images/image2.png")}
        style={{
          width: 150,
          height: 120,
          justifyContent: "center",
          alignSelf: "center",
        }}
        resizeMode="contain"
      />

      <Text style={styles.title}>{isLoginView ? "Нэвтрэх" : "Бүртгүүлэх"}</Text>

      {isLoginView ? (
        <>
          <TextInput
            placeholder="Имэйл хаяг"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            autoCapitalize="none"
            value={loginData.email}
            onChangeText={(val) =>
              setLoginData((prev) => ({ ...prev, email: val }))
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Нууц үг"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            autoCapitalize="none"
            secureTextEntry
            value={loginData.password}
            onChangeText={(val) =>
              setLoginData((prev) => ({ ...prev, password: val }))
            }
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Нэвтрэх</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {step === 1 && (
            <>
              <TextInput
                placeholder="Имэйл хаяг"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(val) => handleOnChange("email", val)}
                style={styles.input}
              />
              <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                <Text style={styles.buttonText}>Дараах</Text>
              </TouchableOpacity>
            </>
          )}
          {step === 2 && otpSent && (
            <>
              <TextInput
                placeholder="OTP код"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                autoCapitalize="none"
                value={formData.otp}
                onChangeText={(val) => handleOnChange("otp", val)}
                style={styles.input}
              />
              <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                <Text style={styles.buttonText}>Дараах</Text>
              </TouchableOpacity>
            </>
          )}
          {step === 3 && (
            <>
              <TextInput
                placeholder="Нууц үг"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                autoCapitalize="none"
                secureTextEntry
                value={formData.password}
                onChangeText={(val) => handleOnChange("password", val)}
                style={styles.input}
              />
              <TextInput
                placeholder="Нууц үг давтах"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                autoCapitalize="none"
                secureTextEntry
                value={formData.repassword}
                onChangeText={(val) => handleOnChange("repassword", val)}
                style={styles.input}
              />
              <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                <Text style={styles.buttonText}>Илгээх</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      )}

      <TouchableOpacity onPress={handleToggle}>
        <Text style={styles.toggleText}>
          {isLoginView
            ? "Шинэ хэрэглэгч үү? Бүртгүүлэх"
            : "Өмнө бүртгүүлсэн үү? Нэвтрэх"}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#00a859" />}
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  toggleText: {
    color: Colors.primaryColor,
    textAlign: "center",
    marginTop: 12,
  },
});

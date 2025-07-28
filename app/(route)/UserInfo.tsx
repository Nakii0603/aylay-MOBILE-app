import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function UserInfoForm() {
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();
  const [initialData, setInitialData] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const loadUserInfo = async () => {
      const stored = await AsyncStorage.getItem("userInfo");
      if (stored) {
        const parsed = JSON.parse(stored);
        setInitialData(parsed);
        reset(parsed);
      }
    };
    loadUserInfo();
  }, []);

  const onSubmit = async (data: any) => {
    const changedFields = Object.keys(data).filter(
      (key) => data[key] !== initialData[key]
    );

    if (changedFields.length === 0) {
      Alert.alert("Анхааруулга", "Ямар ч мэдээлэл өөрчлөгдөөгүй байна.");
      return;
    }

    if (changedFields.length > 1) {
      Alert.alert("Анхааруулга", "Зөвхөн нэг талбар өөрчлөх боломжтой.");
      return;
    }

    try {
      await AsyncStorage.setItem("userInfo", JSON.stringify(data));
      Alert.alert("Амжилттай", `${changedFields[0]} талбар хадгалагдлаа.`);
      setInitialData(data);
    } catch (error) {
      console.error("Мэдээлэл хадгалахад алдаа:", error);
      Alert.alert("Алдаа", "Мэдээлэл хадгалах боломжгүй байна");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.label}>Нэр</Text>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: "Нэр заавал оруулна уу" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Нэр"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Овог</Text>
        <Controller
          control={control}
          name="lastName"
          rules={{ required: "Овог заавал оруулна уу" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Овог"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>И-мэйл хаяг</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "И-мэйл заавал оруулна уу",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "И-мэйл хаяг буруу байна",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="И-мэйл хаяг"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Утасны дугаар</Text>
        <Controller
          control={control}
          name="phone"
          rules={{ required: "Утасны дугаар заавал оруулна уу" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Утасны дугаар"
              keyboardType="phone-pad"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <View style={styles.buttonContainer}>
          <Button
            color={Colors.primaryColor}
            title="Илгээх"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    marginTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 80,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginBottom: 5,
    marginTop: 15,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    marginTop: 30,
  },
});

import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BankScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (params.urls) {
      try {
        setUrls(JSON.parse(params.urls as string));
      } catch {
        Alert.alert("Алдаа", "Банкны мэдээлэл буруу байна.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [params.urls]);

  const openBankApp = (link: string) => {
    Linking.openURL(link).catch(() =>
      Alert.alert("Алдаа", "Апп нээх боломжгүй байна")
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#00B894" />
        <Text style={{ marginTop: 10 }}>Банкны аппуудыг ачааллаж байна...</Text>
      </SafeAreaView>
    );
  }

  if (!urls || urls.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Банкны апп олдсонгүй.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
      </TouchableOpacity>

      <ScrollView style={styles.bankList}>
        {urls.map((bank, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bankItem}
            onPress={() => openBankApp(bank.link)}
          >
            <Image source={{ uri: bank.logo }} style={styles.bankLogo} />
            <View style={styles.bankTextContainer}>
              <Text style={styles.bankName}>{bank.name}</Text>
              <Text style={styles.bankDesc}>{bank.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, marginTop: 30 },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  bankList: { width: "100%", marginTop: 30 },
  bankItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  bankLogo: { width: 40, height: 40, resizeMode: "contain", marginRight: 15 },
  bankTextContainer: { flex: 1 },
  bankName: { fontWeight: "bold", fontSize: 16 },
  bankDesc: { color: "#666" },
});

export default BankScreen;

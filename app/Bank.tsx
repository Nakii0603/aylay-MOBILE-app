import Colors from "@/constants/Colors";
import { useQPayPayment } from "@/hooks/useQPayPayment";
import { SERVER_URI } from "@/utils/uri";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

type BankItem = {
  name: string;
  logo: string;
  link: string; // deep/universal link
  available?: boolean;
};

const COLUMNS = 3;
const GAP = 14;
const SIDE = 16;

const BankScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [loading, setLoading] = useState(true);
  const [banks, setBanks] = useState<BankItem[]>([]);

  const invoiceId = (params.invoiceId as string) || "";

  const { status, manualCheck } = useQPayPayment(invoiceId, {
    baseURL: SERVER_URI,
    checkPath: "/api/bill/check",
    intervalMs: 60000000,
  });

  // Grid item хэмжээ
  const itemSize = useMemo(() => {
    const content = width - SIDE * 2 - GAP * (COLUMNS - 1);
    return Math.floor(content / COLUMNS);
  }, [width]);

  // Банкны жагсаалт parse
  useEffect(() => {
    const init = async () => {
      try {
        const raw: BankItem[] = params.urls
          ? JSON.parse(params.urls as string)
          : [];
        const probed = await Promise.all(
          raw.map(async (b) => {
            try {
              const can = await Linking.canOpenURL(b.link);
              return { ...b, available: !!can };
            } catch {
              return { ...b, available: false };
            }
          })
        );
        probed.sort((a, b) => Number(b.available) - Number(a.available));
        setBanks(probed);
      } catch {
        Alert.alert("Алдаа", "Банкны мэдээлэл буруу байна.");
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [params.urls]);

  // Дэлгэц рүү буцах болгонд нэг удаа шалгана
  useFocusEffect(
    useCallback(() => {
      manualCheck();
    }, [manualCheck])
  );

  // Төлөгдвөл автоматаар буцаах
  useEffect(() => {
    if (status === "PAID") setTimeout(() => router.back(), 600);
  }, [status]);

  const openBankApp = (link: string, name?: string) => {
    Linking.openURL(link).catch(() =>
      Alert.alert(
        "Мэдэгдэл",
        `${name || "Банкны апп"} таны төхөөрөмж дээр суулгаагүй байна.`
      )
    );
  };

  const renderItem = ({ item }: { item: BankItem }) => (
    <Pressable
      onPress={() => openBankApp(item.link, item.name)}
      style={[
        styles.gridItem,
        {
          width: itemSize,
          height: itemSize,
        },
      ]}
    >
      <Image
        source={{ uri: item.logo }}
        style={styles.bankIcon}
        resizeMode="contain"
      />
    </Pressable>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Банкны аппуудыг ачааллаж байна...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Back arrow */}
      <View style={styles.header}>
        <Pressable onPress={router.back} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.black} />
        </Pressable>
      </View>

      {/* 3x grid – зөвхөн icon */}
      <FlatList
        data={banks}
        keyExtractor={(_, i) => String(i)}
        numColumns={COLUMNS}
        renderItem={renderItem}
        columnWrapperStyle={{
          gap: GAP,
          justifyContent: "center",
        }}
        contentContainerStyle={{
          paddingHorizontal: SIDE,
          paddingTop: 12,
          paddingBottom: 100,
          rowGap: GAP,
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* Fixed доод button */}
      {status !== "PAID" && (
        <View style={styles.fixedBottom}>
          <Pressable onPress={manualCheck} style={styles.fixedBtn}>
            <Text style={styles.fixedBtnText}>Төлбөр шалгах</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 6,
  },
  backButton: { padding: 6, borderRadius: 20 },
  gridItem: {
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
      },
      android: { elevation: 2 },
    }),
  },
  bankIcon: { width: "65%", height: "65%", borderRadius: 12 },
  fixedBottom: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  fixedBtn: {
    backgroundColor: "#0ea5e9",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  fixedBtnText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});

export default BankScreen;

import Colors from "@/constants/Colors";
import { aimags, allSurveys } from "@/constants/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  { image: require("../../assets/images/caroseal1.png") },
  { image: require("../../assets/images/caroseal2.png") },
  { image: require("../../assets/images/caroseal3.png") },
];

export default function Home() {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const scrollRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [modalVisibleTerms, setModalVisibleTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const TERMS_KEY = "aylay_terms_accepted";

  useEffect(() => {
    const checkTermsAccepted = async () => {
      const accepted = await AsyncStorage.getItem(TERMS_KEY);
      if (!accepted) {
        setModalVisibleTerms(true);
      }
    };
    checkTermsAccepted();
  }, []);

  const handleAgree = async () => {
    await AsyncStorage.setItem(TERMS_KEY, "true");
    setModalVisibleTerms(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) nextIndex = 0;
      setCurrentIndex(nextIndex);

      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          x: nextIndex * (width - 20),
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, width]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eafff3" }}>
      <View style={styles.container}>
        {/* Carousel */}
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, borderRadius: 10 }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={img.image}
              style={[styles.mainImage, { width: width - 20 }]}
            />
          ))}
        </ScrollView>

        {/* Horizontal Scroll */}

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {allSurveys.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.imageWrapper,
                  { marginLeft: index === 0 ? 0 : 10, width: width / 3 - 23 },
                ]}
                onPress={() =>
                  router.push({
                    pathname: "/SurveyInfo",
                    params: { id: item.id.toString(), name: item.section },
                  })
                }
                activeOpacity={0.8}
              >
                <Image source={item.source} style={styles.itemImage} />
                <View style={styles.nameLabelContainer}>
                  <Text style={styles.nameLabelText}>{item.section}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* Aimags List */}
        <ScrollView
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {aimags.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerBot}
              onPress={() =>
                router.push({
                  pathname: "/[id]",
                  params: {
                    id: item.id.toString(),
                    name: item.name,
                    area: item.area,
                  },
                })
              }
              activeOpacity={0.8}
            >
              <Image source={item.source} style={styles.logo} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.area}</Text>
              </View>
              <Text style={styles.points}>
                +{item.naturalSites?.length || 0}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* TERMS MODAL */}
      <Modal
        transparent
        visible={modalVisibleTerms}
        onRequestClose={() => setModalVisibleTerms(false)}
      >
        <View style={styles.modalContainerTerms}>
          <View style={styles.modalContentTerms}>
            <ScrollView>
              <Text style={styles.modalTitle}>
                Aylay Апп – Үйлчилгээний нөхцөл
              </Text>
              <Text style={styles.termsText}>
                Сүүлд шинэчилсэн: [2025.07.25]
                {"\n\n"}
                Энэхүү үйлчилгээний нөхцөл нь Aylay аппликейшнийг ашиглаж буй
                бүх хэрэглэгчид дагаж мөрдөх журам, эрх, үүргийг тогтооно.
              </Text>

              <Text style={styles.termsText}>
                1. Ерөнхий заалт
                {"\n"}
                Aylay нь Монгол Улсад дотоод аялал жуулчлалын төлөвлөлт,
                мэдээлэл, хамтрагч олох, даатгал, санхүүгийн хуваарилалт зэрэг
                цогц үйлчилгээ үзүүлэх ухаалаг гар утасны апп юм. Энэхүү апп-ийг
                ашигласнаар та энэхүү нөхцлийг бүрэн зөвшөөрч байгаагаа
                илэрхийлж байна.
              </Text>

              <Text style={styles.termsText}>
                2. Бүртгэл ба хэрэглэгчийн мэдээлэл
                {"\n"}• Та үнэн зөв, бодит мэдээллээр бүртгүүлнэ.
                {"\n"}• Та өөрийн бүртгэлийн мэдээллийг нууцалж, гуравдагч
                этгээдэд дамжуулахгүй байх үүрэгтэй.
                {"\n"}• Хуурамч мэдээлэл, гуравдагч этгээдийн нэрээр
                бүртгүүлэхийг хориглоно.
              </Text>

              <Text style={styles.termsText}>
                3. Үйлчилгээний агуулга
                {"\n"}Aylay апп дараах үндсэн үйлчилгээг үзүүлнэ:
                {"\n"}• Аяллын маршрут төлөвлөлт
                {"\n"}• Offline газрын зураг
                {"\n"}• Аяллын хамтрагч олох
                {"\n"}• Аяллын даатгалын холболт
                {"\n"}• Төлбөрийн хуваарилалт
                {"\n"}• AI туслах
                {"\n"}• Урамшуулал, онооны систем
                {"\n\n"}Aylay нь зарим үйлчилгээг гуравдагч байгууллагаар
                дамжуулан үзүүлж болох ба үүнтэй холбогдсон нөхцөл, журам тус
                тусын сайтад хамаарна.
              </Text>

              <Text style={styles.termsText}>
                4. Оюуны өмч
                {"\n"}Aylay аппын дизайны элемент, лого, контент, код, өгөгдлийн
                сан зэрэг нь Aylay-ийн өмч бөгөөд зохиогчийн эрхийн тухай
                хуулиар хамгаалагдсан. Зөвшөөрөлгүй ашиглахыг хориглоно.
              </Text>

              <Text style={styles.termsText}>
                5. Ашиглалтын хязгаарлалт
                {"\n"}• Апп-ийг хууль бус зорилгоор ашиглахыг хориглоно.
                {"\n"}• Апп-ийг эвдэх, өөрчлөх, дахин түгээх, сөрөг код
                суулгахыг хориглоно.
                {"\n"}• Aylay нь хэрэглэгчийн буруутай үйлдлээс үүдэлтэй аливаа
                хохирлыг хариуцахгүй.
              </Text>

              <Text style={styles.termsText}>
                6. Үйлчилгээний өөрчлөлт
                {"\n"}Aylay нь үйлчилгээний нөхцөл, агуулга, функциональ байдлыг
                урьдчилан мэдэгдэлгүйгээр шинэчлэх эрхтэй.
              </Text>

              <Text style={styles.termsText}>
                7. Хэрэглэгчийн хариуцлага
                {"\n"}Хэрэглэгч апп ашиглахдаа хууль зүйн болон ёс зүйн хэм
                хэмжээг баримтална. Зөрчил гаргасан тохиолдолд үйлчилгээний
                эрхийг хязгаарлах, бүртгэлийг устгах эрхтэй.
              </Text>

              <Text style={styles.termsText}>
                8. Мэдэгдэл ба холбоо
                {"\n"}Хэрэглэгчтэй холбоо тогтоохдоо апп доторх мэдэгдэл болон
                бүртгэлтэй цахим шуудан ашиглана. Санал хүсэлт, гомдол хүлээн
                авах хаяг: support@aylay.mn
              </Text>

              <View style={styles.checkboxContainer}>
                <Checkbox value={agreed} onValueChange={setAgreed} />

                <Text style={{ marginLeft: 10 }}>Би зөвшөөрч байна</Text>
              </View>

              <TouchableOpacity
                onPress={handleAgree}
                disabled={!agreed}
                style={[
                  styles.agreeButton,
                  { backgroundColor: agreed ? Colors.primaryColor : "#ccc" },
                ]}
              >
                <Text style={styles.agreeText}>Үргэлжлүүлэх</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  termsText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  agreeButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  agreeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  modalContainerTerms: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContentTerms: {
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainImage: {
    height: 300,
    borderRadius: 10,
  },
  scrollContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 150,
    marginBottom: 10,
  },
  imageWrapper: {
    position: "relative",
    height: 150,
    borderRadius: 10,
    overflow: "visible",
    borderColor: Colors.primaryColor,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  nameLabelContainer: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nameLabelText: {
    paddingHorizontal: 6,
    textAlign: "center",
    color: Colors.primaryColor,
    backgroundColor: Colors.white,
    paddingVertical: 4,
    fontSize: 10,
    fontWeight: 500,
    borderRadius: 16,
    overflow: "hidden",
  },
  containerBot: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    marginTop: 10,
    marginHorizontal: 5,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Shadow for Android
    elevation: 5,
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  points: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

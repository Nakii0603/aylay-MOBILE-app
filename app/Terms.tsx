// app/TermsModal.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TermsModal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Aylay апп – Үйлчилгээний нөхцөл</Text>
        <Text style={styles.date}>Сүүлд шинэчилсэн: [2025.07.25]</Text>

        <Text style={styles.paragraph}>
          Энэхүү үйлчилгээний нөхцөл нь Aylay аппликейшнийг ашиглаж буй бүх
          хэрэглэгчид дагаж мөрдөх журам, эрх, үүргийг тогтооно.
        </Text>

        <Text style={styles.section}>1. Ерөнхий заалт</Text>
        <Text style={styles.paragraph}>
          Aylay нь Монгол Улсад дотоод аялал жуулчлалын төлөвлөлт, мэдээлэл,
          хамтрагч олох, даатгал, санхүүгийн хуваарилалт зэрэг цогц үйлчилгээ
          үзүүлэх ухаалаг гар утасны апп юм. Энэхүү апп-ийг ашигласнаар та
          энэхүү нөхцлийг бүрэн зөвшөөрч байгаагаа илэрхийлж байна.
        </Text>

        <Text style={styles.section}>2. Бүртгэл ба хэрэглэгчийн мэдээлэл</Text>
        <Text style={styles.bullet}>
          • Та үнэн зөв, бодит мэдээллээр бүртгүүлнэ.
        </Text>
        <Text style={styles.bullet}>
          • Та өөрийн бүртгэлийн мэдээллийг нууцалж, гуравдагч этгээдэд
          дамжуулахгүй байх үүрэгтэй.
        </Text>
        <Text style={styles.bullet}>
          • Хуурамч мэдээлэл, гуравдагч этгээдийн нэрээр бүртгүүлэхийг
          хориглоно.
        </Text>

        <Text style={styles.section}>3. Үйлчилгээний агуулга</Text>
        <Text style={styles.paragraph}>
          Aylay дараах үндсэн үйлчилгээг үзүүлнэ:
        </Text>
        <Text style={styles.bullet}>• Аяллын маршрут төлөвлөлт</Text>
        <Text style={styles.bullet}>• Offline газрын зураг</Text>
        <Text style={styles.bullet}>• Аяллын хамтрагч олох</Text>
        <Text style={styles.bullet}>• Аяллын даатгал</Text>
        <Text style={styles.bullet}>• Төлбөрийн хуваарилалт</Text>
        <Text style={styles.bullet}>• AI туслах</Text>
        <Text style={styles.bullet}>• Урамшууллын систем</Text>

        <Text style={styles.section}>4. Оюуны өмч</Text>
        <Text style={styles.paragraph}>
          Aylay аппын лого, загвар, контент зэрэг нь зохиогчийн эрхийн хуулиар
          хамгаалагдсан. Зөвшөөрөлгүй ашиглахыг хориглоно.
        </Text>

        <Text style={styles.section}>5. Ашиглалтын хязгаарлалт</Text>
        <Text style={styles.bullet}>
          • Апп-ийг хууль бус зорилгоор ашиглахыг хориглоно.
        </Text>
        <Text style={styles.bullet}>
          • Апп-ийг эвдэх, өөрчлөх, дахин түгээх, сөрөг код суулгахыг хориглоно.
        </Text>
        <Text style={styles.bullet}>
          • Aylay нь хэрэглэгчийн буруутай үйлдлээс үүдэлтэй аливаа хохирлыг
          хариуцахгүй.
        </Text>

        <Text style={styles.section}>6. Үйлчилгээний өөрчлөлт</Text>
        <Text style={styles.paragraph}>
          Aylay нь үйлчилгээний нөхцөл, агуулга, функциональ байдлыг урьдчилан
          мэдэгдэлгүйгээр шинэчлэх эрхтэй.
        </Text>

        <Text style={styles.section}>7. Хэрэглэгчийн хариуцлага</Text>
        <Text style={styles.paragraph}>
          Хэрэглэгч апп ашиглахдаа хууль зүйн болон ёс зүйн хэм хэмжээг
          баримтална. Зөрчил гаргасан тохиолдолд үйлчилгээний эрхийг хязгаарлах,
          бүртгэлийг устгах эрхтэй.
        </Text>

        <Text style={styles.section}>8. Мэдэгдэл ба холбоо</Text>
        <Text style={styles.paragraph}>
          Хэрэглэгчтэй холбоо тогтоохдоо апп доторх мэдэгдэл болон бүртгэлтэй
          цахим шуудан ашиглана. Санал хүсэлт, гомдол хүлээн авах хаяг:
          support@aylay.mn
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  date: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
});

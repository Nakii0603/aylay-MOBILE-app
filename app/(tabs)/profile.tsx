import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState<string>("");
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");

  useFocusEffect(
    React.useCallback(() => {
      const loadUserInfo = async () => {
        try {
          const storedData = await AsyncStorage.getItem("userInfo");
          if (storedData) {
            const parsed = JSON.parse(storedData);
            const fullName = `${parsed.firstName || ""} ${
              parsed.lastName || ""
            }`.trim();
            setUserName(fullName || "");
            setUserEmail(parsed.email || "");
            setUserPhone(parsed.phone || "");
          }
        } catch (error) {
          console.error("Failed to load user info:", error);
        }
      };

      loadUserInfo();
    }, [])
  );

  const handleTermsScreen = () => {
    router.push("/Terms");
  };
  const handleFAQScreen = () => {
    router.push("/(route)/FAQ");
  };
  const handleInfoNotScreen = () => {
    router.push("/(route)/InfoNot");
  };
  const handleUserInfoNotScreen = () => {
    router.push("/(route)/UserInfo");
  };
  const handleAuth = () => {
    router.push("/(route)/Auth");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundColor}
      />
      <View style={styles.card}>
        <View style={styles.content}>
          <Image
            source={require("@/assets/icons/logoBack.png")}
            style={styles.backgroundImage}
          />
          <View style={styles.profileRowContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require("@/assets/icons/profile.png")
                }
                style={styles.profileImage}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.memberTypeText}>
                Нэр: {userName || "Оруулаагүй"}
              </Text>
              <Text style={styles.infoText}>
                Имэйл: {userEmail || "Оруулаагүй"}
              </Text>
              <Text style={styles.infoText}>
                Утас: {userPhone || "Оруулаагүй"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <ScrollView>
          <TouchableOpacity
            onPress={handleUserInfoNotScreen}
            style={styles.menuItem}
          >
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/lock.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.menuItemText}>Миний мэдээлэл</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFAQScreen} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profQuestionMenu.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.menuItemText}>Асуулт, хариулт</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleTermsScreen}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profTermMenu.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.menuItemText}>Үйлчилгээний нөхцөл</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleAuth}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profTermMenu.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.menuItemText}>Нэвтрэх</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleInfoNotScreen}
            style={styles.menuItem}
          >
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/insurance.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.menuItemText}>Даатгал</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Ionicons name="log-out" size={26} color={Colors.red} />
              <Text style={styles.menuItemLogoutText}>Системээс гарах</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.red} />
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  card: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    height: 140,
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 30,
    position: "relative",
  },
  profileRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  memberTypeText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Inter",
    marginBottom: 5,
  },
  infoText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: "Inter",
    marginTop: 2,
  },
  menu: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10,
    padding: 30,
    zIndex: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 30,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "600",
  },
  backgroundImage: {
    position: "absolute",
    width: 600,
    height: 600,
    opacity: 0.05,
    resizeMode: "contain",
    zIndex: 1,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -200 }, { translateY: -200 }],
  },
});

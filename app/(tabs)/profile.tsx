import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
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
import Ionicons from "react-native-vector-icons/Ionicons";

interface ProgressBarProps {
  levelName: string;
  progress: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  levelName,
  progress,
  total,
}) => {
  const progressPercent = (progress / total) * 100;

  return (
    <View style={styles.proccessBarContainer}>
      <View style={styles.processBarInfo}>
        <Text style={styles.levelText}>{levelName}</Text>
        <Text style={styles.progressText}>{`${progress}/${total}`}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
      </View>
    </View>
  );
};

export default function ProfileScreen() {
  const [token, setToken] = useState<string>("");
  const [userError, setUserError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [profileImage, setProfileImage] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundColor}
      />
      <TouchableOpacity style={styles.backContainer}>
        <Ionicons name="arrow-back" size={24} color={Colors.primaryColor} />
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.content}>
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
              <Text style={styles.memberTypeText}>user Name</Text>
              <View style={styles.scoreRowContainer}>
                <Text style={styles.scoreText}>sdfsdf</Text>
                <Image
                  source={require("@/assets/icons/profScore.png")}
                  style={styles.logoImage}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.scoreText}>sdfsdf</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <ScrollView>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profInformationMenu.png")}
                style={{ width: 26, height: 26 }}
              />
              <Text style={styles.menuItemText}>Миний мэдээлэл</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profPinCodeMenu.png")}
                style={{ width: 26, height: 26 }}
              />
              <Text style={styles.menuItemText}>Пин код өөрчлөх</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profQuestionMenu.png")}
                style={{ width: 26, height: 26 }}
              />
              <Text style={styles.menuItemText}>Асуулт, хариулт</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Image
                source={require("@/assets/icons/profTermMenu.png")}
                style={{ width: 26, height: 26 }}
              />
              <Text style={styles.menuItemText}>Үйлчилгээний нөхцөл</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Ionicons name="log-out" size={26} color={Colors.red} />
              <Text style={styles.menuItemLogoutText}>Системээс гарах</Text>
            </View>
            <AntDesign name="right" size={20} color={Colors.red} />
          </TouchableOpacity>
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
  backContainer: {
    marginLeft: 10,
  },
  processBarInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 5,
  },
  proccessBarContainer: {
    paddingHorizontal: 10,
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
  },
  profileRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  levelText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Inter",
    marginTop: 5,
  },
  memberTypeText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Inter",
    marginBottom: 5,
  },
  logoImage: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginBottom: 10,
  },
  scoreText: {
    color: Colors.white,
    fontSize: 23,
    fontWeight: "bold",
  },
  scoreRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  menu: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10,
    padding: 30,
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
    color: Colors.primaryColor,
    fontWeight: "600",
  },
  menuItemLogoutText: {
    fontSize: 16,
    color: Colors.red,
    fontWeight: "600",
  },
  progressText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: "Inter",
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3b5998",
    borderRadius: 5,
  },
});

import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const router = useRouter();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Toast />
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerShown: false,
        }}
      >
        {/* Hide header for tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Terms modal */}
        <Stack.Screen
          name="Terms"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ paddingHorizontal: 15 }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(route)/FAQ"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ paddingHorizontal: 15 }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(route)/InfoNot"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ paddingHorizontal: 15 }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        {/* Survey screens with custom back buttons */}
        <Stack.Screen
          name="SurveyInfo"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ paddingHorizontal: 15 }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SurveyForm"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ paddingHorizontal: 15 }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Bank"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ paddingHorizontal: 15 }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

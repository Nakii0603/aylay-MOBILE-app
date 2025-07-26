import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerBackVisible: false,
        }}
      >
        {/* Hide header for tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Custom back button for SurveyInfo */}
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

        {/* Default not-found screen */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

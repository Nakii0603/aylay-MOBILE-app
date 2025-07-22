import { Text } from "@react-navigation/elements";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function travel() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "black" }}>travel</Text>
      </View>
    </SafeAreaView>
  );
}

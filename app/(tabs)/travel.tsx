import React from "react";
import { View } from "react-native";
import StepperSurvey from "@/components/user/TravelInterestForm";

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StepperSurvey />
    </View>
  );
}

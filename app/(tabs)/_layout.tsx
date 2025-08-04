import { HapticTab } from "@/components/HapticTab";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 0,
          position: Platform.OS === "ios" ? "absolute" : "relative",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Нүүр",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/homeBlue.png")
                  : require("@/assets/icons/home.png")
              }
              style={{
                width: 28,
                height: 28,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="joinMe"
        options={{
          title: "Хайх",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/starBlue.png")
                  : require("@/assets/icons/star.png")
              }
              style={{
                width: 28,
                height: 28,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="travel"
        options={{
          title: "Аялъя",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/sendBlue.png")
                  : require("@/assets/icons/send.png")
              }
              style={{
                width: 28,
                height: 28,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Газрын зураг",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/mapBlue.png")
                  : require("@/assets/icons/map.png")
              }
              style={{
                width: 28,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профайл",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/userBlue.png")
                  : require("@/assets/icons/user.png")
              }
              style={{
                width: 28,
                height: 28,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

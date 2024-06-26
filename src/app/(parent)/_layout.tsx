import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";

import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import CustomHeader from "@/src/components/naveBar/parent";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Trang chủ",
          header: () => <CustomHeader />,
          headerTitleStyle: { color: "white" },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
          title: "Thống kê",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart-o" color={color} />
          ),
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />
      <Tabs.Screen
        name="calender"
        options={{
          headerStyle: { backgroundColor: "#65737e" },
          headerTitleStyle: { color: "white" },
          header: () => <CustomHeader />,
          title: "Lịch học",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
          title: "Thông báo",
          tabBarIcon: ({ color }) => <TabBarIcon name="bell-o" color={color} />,
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />
    </Tabs>
  );
}

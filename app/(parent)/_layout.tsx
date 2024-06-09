import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

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
        options={{
          title: "Home",
          headerStyle:{backgroundColor:"#65737e"},
          headerTitleStyle:{color:'white'},
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />

      <Tabs.Screen
        name="calender"
        options={{
          headerStyle:{backgroundColor:"#65737e"},
          headerTitleStyle:{color:'white'},
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown:false,
          title: "User",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarStyle: { backgroundColor: "#c0c5ce" },
        }}
      />
    </Tabs>
  );
}

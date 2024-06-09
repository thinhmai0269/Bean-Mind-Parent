import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function ProfileStack() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ headerShown: false }}/>
    </Stack>
  );
}

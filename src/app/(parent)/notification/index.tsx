import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Stack } from "expo-router";

const index = () => {
  const sendToPage = (e: string) => {
  };
  const seed = [
    {
      id: "1",
      time: "20-6-2024",
      data: [
        "A đã hoàn thành xong kiểm tra 1 tiết",
        "A đã hoàn thành xong kiểm tra 1 tiết 2 10 diem",
        "A đã hoàn thành xong kiểm tra 1 tiết 2 10 diem",
      ],
    },
    {
      id: "1",
      time: "21-6-2024",
      data: [
        "A đã hoàn thành xong kiểm tra 1 tiết",
        "A đã hoàn thành xong kiểm tra 1 tiết 2 10 diem",
        "A đã hoàn thành xong kiểm tra 1 tiết 2 10 diem",
      ],
    },
  ];
  return (
    <SectionList
      sections={seed}
      keyExtractor={(item, index) => item + index}
      style={styles.container}
      renderSectionHeader={({ section: { time } }) => (
        <Text
          style={{ fontWeight: "bold", marginVertical: 10, marginLeft: 20 }}
        >
          {time}
        </Text>
      )}
      renderItem={({ item }) => (
        <View
          style={{
            width: "80%",
            height: 50,
            borderWidth: 0.5,
            marginHorizontal: "auto",
            justifyContent: "center",
            alignItems: "flex-start",
            marginVertical: 3,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "700",
              marginLeft: 5,
              color: "rgb(65,105,225)",
            }}
          >
            {item}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      margin: 2,
    },
    card: {
      marginHorizontal: "auto",
      marginVertical: 10,
      flexDirection: "row",
    },
  },
);

export default index;

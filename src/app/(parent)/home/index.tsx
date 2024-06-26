import { Image, Pressable, StyleSheet } from "react-native";
import { FlatList, Text, View } from "react-native";
import ListStudent from "@/src/components/FlatList/ListStudent";

import { Button, Icon, IconButton } from "react-native-paper";
import { useRouter } from "expo-router";
import React from "react";

export default function TabOneScreen() {
  const data = [
    {
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-bia-dep-1.jpg.webp",
      title: "Hướng dẫn các học tập cho các bé vào kỳ nghỉ hè",
    },
    {
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-bia-dep-1.jpg.webp",
      title: "Hướng dẫn các học tập cho các bé vào kỳ nghỉ xuân",
    },
    {
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-bia-dep-1.jpg.webp",
      title: "Hướng dẫn các học tập cho các bé vào kỳ nghỉ tết",
    },
    {
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-bia-dep-1.jpg.webp",
      title: "Hướng dẫn các học tập cho các bé vào kỳ nghỉ xxxx",
    },
  ];
  const router = useRouter();

  const handleRedirect = () => {
    router.push("./kid/create");
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.containerCard}>
          <Image src={`${item.image}`} style={{ width: "100%", height: 150 , borderTopRightRadius:10, borderTopLeftRadius:10}} />
          <View style={{ marginHorizontal: 20, height: 100 }}>
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                marginTop: "auto",
                marginBottom: 10,
                flexDirection: "row",
                width: 65,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 10, fontStyle: "italic" }}>
                Xem thêm
              </Text>
              <View style={{ marginTop: 3, marginLeft: 3 }}>
                <Icon source={"chevron-double-right"} size={10} />
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    borderRadius: 5,
  },
  containerCard: {
    width: "90%",
    height: 250,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: "auto",
    borderColor: "black",
    borderWidth: 1.5, // Độ dày của viền
    borderRadius: 11.5, // Độ cong của góc viền
  },
});

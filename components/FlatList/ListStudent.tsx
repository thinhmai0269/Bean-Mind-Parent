import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ListStudent = (
  { infoStudent }: {
    infoStudent: {
      id: string;
      name: string;
      timeStudy: string;
      class: string;
      avatar: string;
    };
  },
) => {
  return (
    <Link href={`kid/${infoStudent.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.card}>
          <Image src={`${infoStudent.avatar}`} style={styles.image} />
          <View style={{ minWidth: 150, backgroundColor: "blue" }}>
            <Text>{infoStudent.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "500" }}>Lớp:</Text>
              <Text>{infoStudent.class}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "500" }}>Thời gian học:</Text>
              <Text>{infoStudent.timeStudy}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "500" }}>Điểm trung bình:</Text>
              <Text>9.4</Text>
            </View>
          </View>
        </View>
        {/* <Text >{infoStudent.id}</Text> */}
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ListStudent;

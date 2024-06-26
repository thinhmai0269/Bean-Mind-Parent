import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { data } from "../(parent)/statistics/seed";
import { data2 } from "./seed2";
import ListScore from "@/src/components/FlatList/ListScore";
import LineChart from "./components/lineChart";
import * as Progress from "react-native-progress";

const InfoChild = () => {
  const { id: idChild } = useLocalSearchParams();
  const info = data.find((item) => item.id === idChild);

  if (!info) {
    return <Text>Not found</Text>;
  }

  const renderHeader = () => (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${info?.name}` }} />
      <View style={styles.card}>
        <Image
          alt="Anh"
          source={{ uri: info.avatar }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Họ & Tên:</Text>
            <Text>{info.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Lớp:</Text>
            <Text>{info.class}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Thời gian học:</Text>
            <Text>{info.timeStudy}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Điểm trung bình:</Text>
            <Text>9.x</Text>
          </View>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Các môn đang học</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerCol}>Môn học</Text>
        <Text style={styles.headerCol}>Tiến trình</Text>
      </View>
      <View style={styles.progressRow}>
        <View style={styles.progressSubject}>
          <Text>Toán tiểu học nâng cao lớp 3</Text>
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar progress={0.2} style={styles.progressBarStyle} />
        </View>
      </View>
      <LineChart />
      <Text style={styles.sectionTitle}>Điểm thi các môn</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerCol}>Môn học</Text>
        <Text style={styles.headerCol}>Điểm</Text>
        <Text style={styles.headerCol}>Ngày kiểm tra</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={{ backgroundColor: "white" }}
      data={data2}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => <ListScore Score={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    // alignItems: "center",
  },
  card: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginHorizontal: 10,
  },
  infoContainer: {
    flexDirection: "column",
    height: 100,
    justifyContent: "space-between",
  },
  infoRow: {
    flexDirection: "row",
  },
  infoLabel: {
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 5,
  },
  headerCol: {
    maxWidth: 150,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 10,
  },
  progressRow: {
    flexDirection: "row",
    marginLeft: "5%",
  },
  progressSubject: {
    width: 150,
  },
  progressBar: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 7,
  },
  progressBarStyle: {
    width: 150,
  },
});

export default InfoChild;

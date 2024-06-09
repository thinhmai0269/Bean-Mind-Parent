import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { data } from "../(parent)/seed";

import { data2 } from "./seed2";
import ListScore from "@/components/FlatList/ListScore";
import * as Progress from "react-native-progress";
const InfoChild = () => {
  const { id: idChild } = useLocalSearchParams();
  const info = data.find((item) => item.id === idChild);

  return (
    <View>
      <Stack.Screen options={{ title: `${info?.name}` }} />
      {/* <Text>Check {idChild}</Text> */}
      {info
        ? (
          <View style={styles.container}>
            <View style={styles.card}>
              <Image
                alt="Anh"
                source={{ uri: info.avatar }}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "blue",
                  marginHorizontal: 10,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  height: 100,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "500" }}>Họ & Tên:</Text>
                  <Text>{info.name}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "500" }}>Lớp:</Text>
                  <Text>{info.class}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "500" }}>Thời gian học:</Text>
                  <Text>{info.timeStudy}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "500" }}>Điểm trung bình:</Text>
                  <Text>9.x</Text>
                </View>
              </View>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 15 }}>
              Các môn đang học
            </Text>
            <View
              style={{
                flexDirection: "row",

                justifyContent: "space-around",
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.headerCol}>Môn học</Text>
              <Text style={styles.headerCol}>Tiến trình</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{width:150, marginLeft:'5%'}}>
                <Text>
                  Toán tiểu học nâng cao lớp 3
                </Text>
              </View>
              <View style={{ marginLeft: "auto", marginRight: 20 , marginTop:7}}>
                <Progress.Bar progress={0.2} style={{ width: 150 }} />
              </View>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 15 }}>
              Điểm thi các môn
            </Text>
            <View
              style={{
                flexDirection: "row",

                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.headerCol}>Môn học</Text>
              <Text style={[styles.headerCol]}>Điểm</Text>
              <Text style={[styles.headerCol]}>Ngày kiểm tra</Text>
            </View>
            <FlatList
              data={data2}
              renderItem={({ item }) => <ListScore Score={item} />}
            />
          </View>
        )
        : <Text>Not fount</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 10,
  },
  headerCol: {
    maxWidth: 150,
  
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 15,
    fontWeight:"500",
    paddingHorizontal:10
  },
});
export default InfoChild;

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ListScore = (
  { Score }: { Score: { id: number; score: number; name: string } },
) => {
  return (
    <Link href={``} asChild>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.infoSubject}>{Score.name}</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <Text style={[styles.infoSubject, {  textAlign: "left"}]}>{Score.score}</Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight:10
            }}
          >
            <Text style={[styles.infoSubject, {  textAlign: "left"}]}>Ngay {Score.id}</Text>
          </View>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 1,
  },
  infoSubject: {
    minWidth: 50,
   
    alignSelf: "center",
    justifyContent: "center",
  },
});
export default ListScore;

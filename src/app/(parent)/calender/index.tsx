import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Agenda, AgendaEntry, LocaleConfig } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [selected, setSelected] = useState("");
  const items = {
    "2024-06-06": [
      { id: "1", name: "Meeting", height: 100, day: "2024-06-06" },
 
    ],
    "2024-06-07": [
      { id: "2", name: "Meeting 2", height: 100, day: "2024-06-06" },
 
    ],"2024-06-01": [
      { id: "2", name: "Meeting", height: 100, day: "2024-06-06" },
 
    ],
  };
  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 15 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Pressable
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        renderItem={renderItem}
        showOnlySelectedDayItems
        renderEmptyData={() => {
          return (
            <View
              style={{
                flex: 0.1,
                display: "flex",
                justifyContent: "center",
                marginHorizontal: "auto",
              }}
            >
              <Text style={{ fontSize: 24 }}>No events today</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#343d46'
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,

  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
export default index;

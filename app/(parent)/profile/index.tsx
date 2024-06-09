import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Stack } from "expo-router";
const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image alt="Hi" style={styles.image} />
        <View style={{ marginLeft: 5, marginTop: 5 }}>
          <Text style={{ fontSize: 24 }}>Nguyen Thi Dieu</Text>
          <View
            style={{ flexDirection: "row", marginVertical: 2, marginTop: 5 }}
          >
            <Text>Email:</Text>
            <Text>xyz@gmail.com</Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 2 }}>
            <Text>Phone:</Text>
            <Text>09xxxxxxxx</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardActivities}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
        >
          Lịch sử thanh toán
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
        >
          Hỗ Trợ
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
        >
          Thay đổi thông tin con
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
        >
          Đổi mật khẩu
        </Button>
      </View>
      <Button
        mode="contained"
        onPress={() => console.log("Pressed")}
        labelStyle={{ fontSize: 10, color: "red" }}
        contentStyle={{
          flexDirection: "row-reverse",
          justifyContent: "center",
          paddingVertical: 0,
        }}
        style={{
          borderRadius: 8,
          paddingVertical: 1,
          paddingHorizontal: 2,
          height:40,
          minWidth: 'auto', 
          marginTop:'auto',
          alignSelf: "center",
          backgroundColor:'white',
        }}
      >
        Đăng xuất
      </Button>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      margin: 5,
      backgroundColor: "white",
      borderRadius: 5,
      marginTop:'10%'
    },
    card: {
      marginHorizontal: "auto",
      marginVertical: 10,
      flexDirection: "row",
    },
    image: {
      height: 100,
      width: 100,
      backgroundColor: "#43515c",
      borderRadius: 10,
    },
    cardActivities: {
      justifyContent: "space-between",
      height: "45%",
      marginHorizontal: 20,
    },
    buttonContent: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
    buttonText: {
      flex: 1,
      textAlign: "left",
    },
    button: {
      marginVertical: 8, 
    },
  },
);

export default index;

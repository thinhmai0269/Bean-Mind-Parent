import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";
interface DrawerProps {
  visible: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ visible, onClose }) => {
  const windowWidth = Dimensions.get("window").width;

  const slideAnimation = new Animated.Value(windowWidth);
  React.useEffect(() => {
    if (visible) {
      // Nếu drawer hiển thị, thực hiện animation từ phải sang trái
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: windowWidth,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, windowWidth]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.drawerContainer, {
          transform: [{ translateX: slideAnimation }],
        }]}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Image
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41UoXzHTDnz3IpqdRzRZrl6deOwz_azfb5w&s"}
              alt="Hi"
              style={styles.image}
            />

            <View style={{ marginLeft: 5, marginTop: 5 }}>
              <Text style={{ fontSize: 24 }}>Nguyen Thi Dieu</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 2,
                  marginTop: 5,
                }}
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
              icon="history"
              mode="contained"
              onPress={() => console.log("Pressed")}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Lịch sử thanh toán
            </Button>
            <Button
              icon="headset"
              mode="contained"
              onPress={() => console.log("Pressed")}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Hỗ Trợ
            </Button>
            <Button
              icon="account-settings-outline"
              mode="contained"
              onPress={() => console.log("Pressed")}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Thay đổi thông tin con
            </Button>
            <Button
              icon="lock"
              mode="contained"
              onPress={() => console.log("Pressed")}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Đổi mật khẩu
            </Button>
          </View>
          <Button
            mode="text"
            onPress={() => console.log("Pressed")}
            labelStyle={{ fontSize: 8, color: "red" }}
            contentStyle={{
              justifyContent: "center",
            }}
            style={{
              borderRadius: 8,

              marginTop: "auto",
              alignSelf: "center",
              backgroundColor: "rgb(173,216,230)",
            }}
          >
            Đăng xuất
          </Button>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  drawerContainer: {
    position: "absolute",
    top: 0,
    right: 0,

    height: "100%",
    width: "75%",
    backgroundColor: "#f0f0f0",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  card: {
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: "#43515c",
    borderRadius: 10,
    marginHorizontal: "auto",
  },
  cardActivities: {
    justifyContent: "space-between",
    height: "45%",
    marginHorizontal: 20,
    marginTop: "10%",
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
});

export default Drawer;

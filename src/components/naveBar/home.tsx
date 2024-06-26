import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Drawer from "../drawer/profile"; // Assuming Drawer component is in the same directory
import { IconButton } from "react-native-paper";

const CustomHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.headerTitle}>avatar +</Text>
        <Text style={styles.headerTitle}>Full name/ logo app</Text>
      </View>

      <TouchableOpacity onPress={toggleDrawer}>
        <IconButton icon={"format-list-bulleted"} iconColor="white" />
      </TouchableOpacity>
      <Drawer visible={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: "#65737e",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 14,
  },
  drawerButton: {
    color: "white",
    fontSize: 14,
    marginLeft: 20,
  },
});

export default CustomHeader;

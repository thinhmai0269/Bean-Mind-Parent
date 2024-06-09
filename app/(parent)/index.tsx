import { Pressable, StyleSheet } from "react-native";
import { FlatList, Text, View } from "react-native";
import ListStudent from "@/components/FlatList/ListStudent";
import { data } from "./seed";
import { Button, Icon, IconButton } from "react-native-paper";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("./kid/create");
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListStudent infoStudent={item} />}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={{ marginLeft: "auto", marginRight: 20 }}>
        <IconButton
          icon="plus-circle-outline"
          iconColor={"black"}
          size={30}
          onPress={() => handleRedirect()}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: "0%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

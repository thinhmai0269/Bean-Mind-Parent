import { ActivityIndicator, Text, View } from "react-native";
import React from "react";

import { Link, Redirect } from "expo-router";
import Button from "../components/Button";

const index = () => {
  // const { session, loading, isAdmin } = useAuth();

  // if (loading) {
  //   return <ActivityIndicator />;
  // }

  // if (!session) {
  //   return <Redirect href={"/sign-in"} />;
  // }

  // if (!isAdmin) {
  //   return <Redirect href={"/(user)"} />;
  // }
  const checkButton = () => {
    console.log("Hi");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(parent)"} asChild>
        <Button text="BM" />
      </Link>
      <Link href={'/sign-in'} asChild>
        <Button text="Login" />
      </Link>

      <Button onPress={() => checkButton} text="Sign out" />
    </View>
  );
};

export default index;

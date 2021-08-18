import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{ flex: 1, fontSize: 24 }}>Like It</Text>
      <FontAwesome name="heart" size={24} color="red" />
      <Text style={{ fontSize: 24, marginLeft: 5 }}>{props.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "#D0CEE2",
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
  },
});

export default Header;

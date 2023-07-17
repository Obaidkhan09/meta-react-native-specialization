import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View
      style={style.container}
    >
      <Text style={{ padding: 30, fontSize: 25, color: "black" }}>
        Welcome to
        <Text style={style.textStyle}> Little Lemon</Text>
      </Text>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
    container : {
        flex: 0.12,
        backgroundColor: "#F4CE14",
        alignItems: "center",
        justifyContent: "center",
      },
      textStyle : { fontWeight: "bold" }
})
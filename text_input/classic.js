import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { ThemeColors } from "../theme/Colors";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default function Classic({ title, secure }) {
  const [Active, setActive] = useState(false);

  const styles = StyleSheet.create({
    contianer: {},
    input: {
      width: "100%",
      height: WindowWidth * 0.15,
      borderColor: Active
        ? ThemeColors.LightMode.Primary.main
        : "rgb(200,200,200)",
      borderWidth: Active ? 2 : 1,
      borderRadius: WindowWidth * 0.02,
      paddingHorizontal: WindowWidth * 0.05,
      marginVertical: WindowHeight * 0.01,
    },
  });

  return (
    <TextInput
      placeholder={title}
      style={styles.input}
      secureTextEntry={secure ? true : false}
      onFocus={() => setActive(true)}
      onEndEditing={() => setActive(false)}
    />
  );
}

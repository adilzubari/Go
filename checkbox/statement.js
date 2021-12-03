import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import ClassicCheckbox from "./classic";
import { ThemeColors } from "../theme/Colors";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default function Classic({ statement }) {
  const [Active, setActive] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginVertical: WindowHeight * 0.003,
    },
    text: {
      fontSize: WindowWidth * 0.03,
      paddingHorizontal: WindowWidth * 0.02,
      lineHeight: WindowWidth * 0.05,
      color: "rgb(30,30,30)",
    },
  });

  return (
    <View style={styles.container}>
      <ClassicCheckbox />
      <Text style={styles.text}>{statement}</Text>
    </View>
  );
}

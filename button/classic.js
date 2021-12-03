import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeColors } from "../theme/Colors";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default function Classic({ value }) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.button}>
      <Text style={styles.buttonValue}>{value}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  contianer: {},
  button: {
    width: "100%",
    height: WindowWidth * 0.15,
    backgroundColor: ThemeColors.LightMode.Primary.main,
    borderRadius: WindowWidth * 0.02,
  },
  buttonValue: {
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    color: "rgba(250,250,250,.8)",
    fontSize: WindowWidth * 0.04,
  },
});

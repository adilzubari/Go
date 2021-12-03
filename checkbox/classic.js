import React, { useState } from "react";
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

export default function Classic({ title, secure }) {
  const [Active, setActive] = useState(false);

  const styles = StyleSheet.create({
    checkbox: {
      width: WindowWidth * 0.05,
      height: WindowWidth * 0.05,
      borderColor: "rgb(100,100,100)",
      borderWidth: 1,
      borderRadius: WindowWidth * 0.01,
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: WindowWidth * 0.03,
      backgroundColor: Active ? "rgb(100,100,100))" : "rgba(0,0,0,0)",
      color: "white",
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => setActive(Active ? false : true)}
    >
      {Active && <Text style={styles.checkbox}>&#10004;</Text>}
      {!Active && <Text style={styles.checkbox}></Text>}
    </TouchableOpacity>
  );
}

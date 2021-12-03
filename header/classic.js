import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default function classic({ goBack, title, navigation }) {
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.leftButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="left"
            size={WindowWidth * 0.06}
            color="rgb(50,50,50)"
          />
        </TouchableOpacity>
      )}
      <Text style={styles.centerView}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.rightButton}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  centerView: {
    flexGrow: 1,
    height: WindowWidth * 0.12,
    textAlignVertical: "center",
    fontSize: WindowWidth * 0.04,
    color: "rgb(50,50,50)",
    paddingHorizontal: WindowWidth * 0.05,
  },
  leftButton: {
    width: WindowWidth * 0.12,
    height: WindowWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
  },
  rightButton: {
    width: WindowWidth * 0.12,
    height: WindowWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
  },
});

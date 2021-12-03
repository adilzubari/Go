import React from "react";
import { Text, View } from "react-native";
import Classic from "./classic";

export default function index(props) {
  if (props.type == "classic") return <Classic {...props} />;
  else return <Classic {...props} />;
}

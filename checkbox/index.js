import React from "react";
import { Text, View } from "react-native";
import ClassicCheckbox from "./classic";
import StatementCheckbox from "./statement";

export default function index(props) {
  if (props.type == "classic") return <ClassicCheckbox {...props} />;
  if (props.type == "statement") return <StatementCheckbox {...props} />;
  else return <Classic {...props} />;
}

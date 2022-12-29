import React from "react";
import { Text, View } from "react-native";
import SnapchatCamera from "./SnapchatCamera";

export default function Snapchat() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SnapchatCamera />
    </View>
  );
}

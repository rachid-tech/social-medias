import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Header from "./Header";
import Stories from "./Stories";
import Feed from "./Feed";

export default function Instagram() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Header />
      <ScrollView style={styles.scrollContainer}>
        <Stories />
        <Feed />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#black",
  },
  scrollContainer: {
    width: "100%",
    backgroundColor: "#black",
  },
});

import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Header() {
  const [fontsLoaded] = useFonts({
    Pacifico: require("../../../assets/Pacifico-Regular.ttf"),
  });

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {!fontsLoaded ? (
          <Text style={{ color: "white" }}>Instagram</Text>
        ) : (
          <Text style={styles.text}>Instagram</Text>
        )}
        <FontAwesome
          name="angle-down"
          color={"white"}
          size={20}
          style={styles.arrowLogo}
        />
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.logos}>
          <FontAwesome name="plus-square-o" color={"white"} size={27} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logos}>
          <FontAwesome name="heart-o" color={"white"} size={23} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logos}>
          <FontAwesome name="send-o" color={"white"} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  titleContainer: {
    width: "30%",
    left: "5%",
    top: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontFamily: "Pacifico",
    fontSize: 24,
  },
  arrowLogo: {
    height: 30,
    top: "10%",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "28%",
    top: "25%",
    left: "15%",
  },
  logos: {
    left: "100%",
  },
});

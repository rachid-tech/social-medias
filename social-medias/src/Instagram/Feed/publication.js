import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Publication({ element }) {
  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={styles.profileContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.profileImage}
            source={{
              uri: element.download_url,
            }}
          />
          <View style={{ left: 10 }}>
            <Text style={styles.text}>{element.author}</Text>
            <Text style={styles.text}>{element.id}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.followButton}>
            <Text style={styles.text}>Suivre</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageStory}
        source={{
          uri: element.download_url,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStory: {
    // width: "100%",
    height: 630,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderColor: "pink",
    borderWidth: 1,
  },
  profileContainer: {
    width: "100%",
    backgroundColor: "black",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  followButton: {
    height: 30,
    width: 60,
    borderRadius: 5,
    backgroundColor: "#2e2e2e",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Publication({ element, description }) {
  useEffect(() => {
    console.log("desc ", description);
  }, []);
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
      <View style={styles.underImage}>
        <View style={styles.logoView}>
          <TouchableOpacity style={styles.logos}>
            <FontAwesome name="heart-o" color={"white"} size={23} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logos}>
            <FontAwesome name="comment-o" color={"white"} size={23} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logos}>
            <FontAwesome name="send-o" color={"white"} size={23} />
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <Text style={{ color: "white", left: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {element.author}
            </Text>
            {"  "}
            {description.text}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStory: {
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
    backgroundColor: "black",
    marginLeft: "5%",
    marginRight: "5%",
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
  underImage: {
    height: 100,
  },
  logos: {
    top: 10,
  },
  logoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "22%",
  },
  textView: {
    top: 20,
    flexDirection: "row",
    width: "90%",
  },
});

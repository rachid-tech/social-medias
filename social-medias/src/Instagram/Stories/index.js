import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import axios from "axios";

export default function Stories() {
  const [imagesArray, setImagesArray] = useState([]);

  const getImages = async () => {
    await axios
      .get("https://picsum.photos/v2/list?page=2", {})
      .then((response) => setImagesArray(response.data));
  };
  useEffect(() => {
    getImages();
    console.log(
      "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
      imagesArray[0]
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollStory}>
        {imagesArray.map((element, index) => {
          return (
            <View style={{ alignItems: "center" }} key={index}>
              <Image
                key={index}
                style={styles.imageStory}
                source={{
                  uri: element.download_url,
                }}
              />
              <Text style={styles.textStory}>
                {element.author.length < 10
                  ? `${element.author}`
                  : `${element.author.substring(0, 11)}`}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 115,
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStory: {
    width: 70,
    height: 70,
    borderRadius: 200,
    borderColor: "pink",
    borderWidth: 1,
    marginLeft: 7,
  },
  textStory: {
    color: "white",
    fontSize: 10,
    top: 5,
  },
  scrollStory: {
    height: 100,
    width: "100%",
    top: 15,
  },
});

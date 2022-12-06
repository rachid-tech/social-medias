import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Publication from "./publication";
import axios from "axios";

export default function Feed() {
  const [imagesArray, setImagesArray] = useState([]);
  const getImages = async () => {
    await axios
      .get("https://picsum.photos/v2/list?page=3", {})
      .then((response) => setImagesArray(response.data));
  };

  useEffect(() => {
    getImages();
    setImagesArray(imagesArray.slice(0, 4));
    console.log(imagesArray);
  }, []);

  return (
    <View style={styles.container}>
      {imagesArray.map((element, index) => {
        console.log(element.download_url);
        return <Publication element={element} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    top: 10,
    backgroundColor: "black",
  },
});

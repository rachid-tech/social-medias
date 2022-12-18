import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Publication from "./publication";
import axios from "axios";

export default function Feed() {
  const [imagesArray, setImagesArray] = useState([]);
  const [descriptionArray, setDescriptionArray] = useState([]);
  const getImages = async () => {
    await axios
      .get("https://picsum.photos/v2/list?page=3", {})
      .then((response) => setImagesArray(response.data));
  };

  const getDescription = () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setDescriptionArray(data);
      });
  };

  useEffect(() => {
    getImages();
    getDescription();
    setImagesArray(imagesArray.slice(0, 4));
    console.log(imagesArray);
  }, []);

  return (
    <View style={styles.container}>
      {imagesArray.map((element, index) => {
        return (
          <Publication
            description={descriptionArray[index]}
            element={element}
            key={index}
          />
        );
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

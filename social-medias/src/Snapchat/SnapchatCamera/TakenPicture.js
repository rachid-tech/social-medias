import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as MediaLibrary from "expo-media-library";

export default function TakenPicture(props) {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const save = (imageUri) => {
    MediaLibrary.saveToLibraryAsync(imageUri);
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ImageBackground source={{ uri: props.imageUri }} style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ top: "4%" }}
          onPress={() => props.onChange(null)}
        >
          <Ionicons name="close-outline" color={"white"} size={42} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ top: "80%" }}
          onPress={() => save(props.imageUri)}
        >
          <MaterialIcons name="save-alt" color={"white"} size={30} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import TakenPicture from "./TakenPicture";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SnapchatCamera() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
    }
  };

  function handleChange(newValue) {
    setImageUri(newValue);
  }

  return (
    <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            top: "10%",
            height: "10%",
            width: "10%",
            marginLeft: "auto",
          }}
          onPress={() => toggleCameraType()}
        >
          <MaterialCommunityIcons
            name="rotate-3d-variant"
            color={"white"}
            size={35}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <MaterialCommunityIcons
            name="selection-ellipse"
            color={"white"}
            size={120}
          />
        </TouchableOpacity>
        {imageUri !== null ? (
          <TakenPicture imageUri={imageUri} onChange={handleChange} />
        ) : (
          <></>
        )}
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {},
  button: {
    alignItems: "center",
    marginTop: "auto",
    bottom: "10%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TakenPicture(props) {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ImageBackground source={{ uri: props.imageUri }} style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ top: "4%" }}
          onPress={() => props.onChange(null)}
        >
          <Ionicons name="close-outline" color={"white"} size={42} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

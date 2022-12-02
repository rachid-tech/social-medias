import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//MainPages

import Snapchat from "./src/Snapchat";
import Instagram from "./src/Instagram";
import Twitter from "./src/Twitter";

//

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffccf8",
            borderRadius: 15,
            height: 70,
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowColor: "#7F5DF0",
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginBottom: 25,
          },
        }}
      >
        <Tab.Screen
          name="Instagram"
          component={Instagram}
          options={{
            tabBarActiveTintColor: "#962fbf",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="instagram"
                color={color}
                size={size * 1.2}
                style={{ marginTop: "55%", height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Snapchat"
          component={Snapchat}
          options={{
            tabBarActiveTintColor: "#fffc00",

            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="snapchat-ghost"
                color={color}
                size={size * 1.2}
                style={{ marginTop: "55%", height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Twitter"
          component={Twitter}
          options={{
            tabBarActiveTintColor: "#00acee",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="twitter"
                color={color}
                size={size * 1.2}
                style={{ marginTop: "55%", height: 30 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

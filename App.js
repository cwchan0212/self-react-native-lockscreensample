import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import Swiper from "react-native-swiper";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ignoreWarnings from "./screens/ignoreWarnings";

import LockScreen from "./screens/lock/LockScreen";
import LockScreenPasscode from "./screens/lock/LockScreenPasscode";
import LockScreenNotification from "./screens/lock/LockScreenNotification";
import ContactsScreen from "./screens/contact/ContactsScreen";
import Home from "./screens/home/Home";

// Refernces
// https://github.com/musicodinghub/react-native-ios13gui-mock


const Stack = createStackNavigator();

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const customFonts = {
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Thin": require("./assets/fonts/SF-Pro-Display-Thin.otf"),
    "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
  };

  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  }, []);

  if (assetsLoaded) {
    return (
      // <Swiper
      //   activeDot={
      //     <View
      //       style={{
      //         width: 7,
      //         height: 7,
      //         bottomRadius: 7,
      //         backgroundColor: "#fff",
      //         marginLeft: 7,
      //         marginRight: 7,
      //       }}
      //     ></View>
      //   }
      // >
      //   <LockScreen />
      //   <LockScreenPasscode />
      //   <LockScreenNotification />
      // </Swiper>
      // <Home />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Contacts">
          <Stack.Screen name="Home" component={Home} optons={{ headerScreen: false }} />
          <Stack.Screen name="Contacts" component={ContactsScreen} optons={{ headerScreen: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    <View style={styles.container}>
      <ActivityIndicator size="small" />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

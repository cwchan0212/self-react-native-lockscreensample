import React from "react";
import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, Animated, Easing, TouchableOpacity } from "react-native";
import moment from "moment/moment";
import Application from "../../components/Application";

const { width, height } = Dimensions.get("window");
let apps = [
  {
    name: "Appstore",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Appstore.png"),
    number: 1,
  },

  {
    name: "Calculator",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Calculator.png"),
    number: 2,
  },

  {
    name: "Calendar",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Calendar.png"),
    number: 3,
  },

  {
    name: "Camera",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Camera.png"),
    number: 4,
  },

  {
    name: "Clock",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Clock.png"),
    number: 5,
  },

  {
    name: "Health",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Health.png"),
    number: 6,
  },

  {
    name: "iBook",
    icon: require("../../assets/images/dark/Graphics/AppIcons/iBook.png"),
    number: 7,
  },

  {
    name: "iTunes",
    icon: require("../../assets/images/dark/Graphics/AppIcons/iTunes.png"),
    number: 8,
  },

  {
    name: "Mail",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Mail.png"),
    number: 9,
  },

  {
    name: "Map",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Map.png"),
    number: 10,
  },

  {
    name: "Message",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Message.png"),
    number: 11,
  },

  {
    name: "News",
    icon: require("../../assets/images/dark/Graphics/AppIcons/News.png"),
    number: 12,
  },

  {
    name: "Note",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Note.png"),
    number: 13,
  },

  {
    name: "Photo",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Photo.png"),
    number: 14,
  },

  {
    name: "Reminder",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Reminder.png"),
    number: 15,
  },

  {
    name: "Settings",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Settings.png"),
    number: 16,
  },

  {
    name: "Stock",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Stock.png"),
    number: 17,
  },

  {
    name: "TV",
    icon: require("../../assets/images/dark/Graphics/AppIcons/TV.png"),
    number: 18,
  },

  {
    name: "Wallet",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Wallet.png"),
    number: 19,
  },

  {
    name: "Weather",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Weather.png"),
    number: 20,
  },
];

const HomeSlide2 = () => {
  const [deleteMode, setDeleteMode] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [stop, setStop] = useState(true);

  const rotateAnimated = Animated.timing(animatedValue, {
    toValue: 1,
    duration: 700,
    easing: Easing.inOut(Easing.linear),
    useNativeDriver: true, // Set this to true or false as needed.

  });

  const _setDeleteMode = (mode) => {
    setDeleteMode(mode);
    setStop(!stop);
  };

  const _startAnimated = () => {
    animatedValue.setValue(0);
    rotateAnimated.start(() => {
      if (stop === false) {
        _startAnimated();
      }
    });
  };

  return (

    <SafeAreaView style={[styles.container, { height: "100%" }]}>
      <StatusBar barStyle="light-content" hidden={false} />
      <View style={styles.apps}>
        {apps.map((app, i) => (
          <Application
            app={app}
            key={i}
            deleteMode={deleteMode}
            _setDeleteMode={_setDeleteMode}
            _setStartAnimated={_startAnimated} // Make sure the prop name matches
            animatedValue={animatedValue.interpolate({
              inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
              outputRange: ["0deg", "3deg", "3deg", "0deg", "-3deg", "0deg"],
            })}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // borderColor: 'red',
    // borderWidth: 1,
  },
  apps: {
    width: width - 25, // 329,
    // height: 700,
    marginTop: 28,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",

    // backgroundColor: '#ffffff',
  },
  appIcon: {
    width: 72,
    height: 72,
  },
  appText: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 12,
    color: "#ffffff",
    letterSpacing: 0,
  },
});

export default HomeSlide2;

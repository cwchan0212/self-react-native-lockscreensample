import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import moment from "moment/moment";
import Swiper from "react-native-swiper";

import Application from "../../components/Application";
import HomeSlide1 from "./HomeSlide1";
import HomeSlide2 from "./HomeSlide2";
import HomeSlide3 from "./HomeSlide3";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

let apps = [
  {
    name: "Appstore",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Appstore.png"),
  },

  {
    name: "Calculator",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Calculator.png"),
  },

  {
    name: "Calendar",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Calendar.png"),
  },

  {
    name: "Camera",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Camera.png"),
  },

  {
    name: "Clock",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Clock.png"),
  },

  {
    name: "Health",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Health.png"),
  },

  {
    name: "iBook",
    icon: require("../../assets/images/dark/Graphics/AppIcons/iBook.png"),
  },

  {
    name: "iTunes",
    icon: require("../../assets/images/dark/Graphics/AppIcons/iTunes.png"),
  },

  {
    name: "Mail",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Mail.png"),
  },

  {
    name: "Map",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Map.png"),
  },

  {
    name: "Message",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Message.png"),
  },

  {
    name: "News",
    icon: require("../../assets/images/dark/Graphics/AppIcons/News.png"),
  },

  {
    name: "Note",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Note.png"),
  },

  {
    name: "Photo",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Photo.png"),
  },

  {
    name: "Reminder",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Reminder.png"),
  },

  {
    name: "Settings",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Settings.png"),
  },

  {
    name: "Stock",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Stock.png"),
  },

  {
    name: "TV",
    icon: require("../../assets/images/dark/Graphics/AppIcons/TV.png"),
  },

  {
    name: "Wallet",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Wallet.png"),
  },

  {
    name: "Weather",
    icon: require("../../assets/images/dark/Graphics/AppIcons/Weather.png"),
  },
];

const Home = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} />
      <Image
        source={require("../../assets/images/dark/Background.jpg")}
        style={{
          position: "absolute",
          top: 0,
          width: width,
          height: height,
        }}
      />
      <Swiper paginationStyle={{ position: "absolute", bottom: 10 }} activeDot={<View style={{ width: 7, height: 7, borderRadius: 7, backgroundColor: "#ffffff", marginRight: 7, marginLeft: 7 }}></View>}>
        <HomeSlide1 />
        <HomeSlide1 />
        <HomeSlide1 />
      </Swiper>
      <View style={styles.dock}>
        <Image style={styles.appIcon} source={require("../../assets/images/dark/Graphics/AppIcons/Phone.png")} />
        <Image style={styles.appIcon} source={require("../../assets/images/dark/Graphics/AppIcons/Safari.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Contacts")}>
          <Image style={styles.appIcon} source={require("../../assets/images/dark/Graphics/AppIcons/Contact.png")} />
        </TouchableOpacity>
        <Image style={styles.appIcon} source={require("../../assets/images/dark/Graphics/AppIcons/Music.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  // apps: {
  //   width: width - 50, // 329,
  //   height: 485,
  //   marginTop: 28,
  //   marginLeft: 25,
  //   marginRight: 25,
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   backgroundColor: '#ffffff',
  // },
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
  dock: {
    // marginLeft: 10,
    margin: 11,
    positiion: "absolute",
    bottom: 0,
    width: width - 50,
    height: 94,
    borderRadius: 31,
    backgroundColor: "rgba(255,255,255,0.2)",
    // opacity: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Home;

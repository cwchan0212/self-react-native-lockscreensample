import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import moment from "moment";

import Notification from "../../components/Notification";

const { width, height } = Dimensions.get("window");

const LockScreenNotification = () => {
  const notifications = [
    {
      icon: require("../../assets/images/dark/Screen_Time_Icon.png"),
      header: "SCREEN TIME",
      time: "Yesterday, 09:01",
      title: "Weekly Report",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: require("../../assets/images/dark/Google_Map_Icon.png"),
      header: "GOOGLE MAP",
      time: "Tuesday, 11:01",
      title: "Google Map Update",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: require("../../assets/images/dark/Screen_Time_Icon.png"),
      header: "SCREEN TIME",
      time: "Yesterday, 09:01",
      title: "Weekly Report",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: require("../../assets/images/dark/Google_Map_Icon.png"),
      header: "GOOGLE MAP",
      time: "Tuesday, 11:01",
      title: "Google Map Update",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: require("../../assets/images/dark/Screen_Time_Icon.png"),
      header: "SCREEN TIME",
      time: "Yesterday, 09:01",
      title: "Weekly Report",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: require("../../assets/images/dark/Google_Map_Icon.png"),
      header: "GOOGLE MAP",
      time: "Tuesday, 11:01",
      title: "Google Map Update",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../../assets/images/dark/Background.jpg")}
        style={{
          position: "absolute",
          top: 0,
          width: width,
          height: height,
        }}
        // blurRadius={40}
      />
      <ScrollView style={styles.scrollContainer}> 
        <View style={styles.datetime}>
          <Image source={require("../../assets/images/dark/Locked_Icon.png")} />
          <Text style={styles.time}>{moment().format("HH:mm")}</Text>
          <Text style={styles.date}>{moment().format("dddd, DD, MMMM")}</Text>
        </View>

        <View style={styles.notification}>
          <View style={styles.notificationCentreContainer}>
            <Text style={styles.notificationCentre}>Notification Centre</Text>
            <Image source={require("../../assets/images/dark/Close_Icon.png")} />
          </View>
          {notifications.map((item, index) => {
            return <Notification item={item} key={index} />;
          })}
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/images/dark/Flash_Light.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/images/dark/Camera.png")} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },

  datetime: {
    height: 180, // Adjust from 180 to 300
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  time: {
    fontFamily: "SFProDisplay-Thin",
    fontSize: 100, // default: 80
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },

  date: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 0.32,
  },

  time: {
    fontFamily: "SFProDisplay-Thin",
    fontSize: 100, // default: 80
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },

  date: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 0.32,
  },
  swipe: {
    position: "absolute",
    bottom: 50,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    color: "#ffffff",
    letterSpacing: -0.41,
    textAlign: "center",
    lineHeight: 22,
  },
  notification: {
    marginTop: 42,
  },
  notificationCentre: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 28,
    color: "#ffffff",
  },
  notificationCentreContainer: {
    marginLeft: 18,
    marginRigth: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    letterSpacing: 0.35,
    width: width - 50,
  },

  buttons: {
    marginTop: 20, // changed from 480
    flexDirection: "row",
    marginLeft: 46,
    marginRight: 46,
    alignItem: "center",
    justifyContent: "space-between",
  },

  button: {
    marginLeft: 100,
    marginRight: 100,
  },

  scrollContainer : {
    width: width,
  }
});
export default LockScreenNotification;

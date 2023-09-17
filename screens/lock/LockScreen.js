import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import moment from "moment";

const { width, height } = Dimensions.get("window");
const LockScreen = () => {
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

      <View style={styles.datetime}>
        <Image source={require("../../assets/images/dark/Locked_Icon.png")} />
        <Text style={styles.time}>{moment().format("HH:mm")}</Text>
        <Text style={styles.date}>{moment().format("dddd, DD, MMMM")}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../assets/images/dark/Flash_Light.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../assets/images/dark/Camera.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.swipe}>
        <Text style={styles.swipeText}>Swipe to open</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    // justifyContent: "center",
  },
  datetime: {
    height: 180,
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

  buttons: {
    marginTop: 550, // changed from 480
    flexDirection: 'row',
    marginLeft: 46,
    marginRight: 46,
    alignItem: 'center',
    justifyContent: "space-between",
  },


  button: {
    marginLeft: 100,
    marginRight: 100,
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
});

export default LockScreen;

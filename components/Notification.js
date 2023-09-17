import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity, ImageBackground } from "react-native";

const { width, height } = Dimensions.get("window");

const Notification = (_item) => {
  let item = { ..._item.item };
  // console.log(item.header)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Image style={styles.headerIcon} source={item.icon} />
          <Text style={styles.headerText}>{item.header}</Text>
        </View>
        <Text style={styles.headerTime}>{item.time}</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.message}>
        <Text style={styles.messageText}>{item.message} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 105,
    margin: 4,
    borderRadius: 13,
    backgroundColor: "rgba(37,37,37,0.5)",
  },
  header: {
    marginLeft: 10,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width - 50,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 13,
    color: "#ff375f",
    letterSpacing: -0.08,
    marginLeft: 5,
    // lineHeight: 18, // ignore this
  },
  headerTime: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 13,
    color: "#ff375f",
    letterSpacing: -0.08,
    lineHeight: 18,
    textAlign: "center",
  },
  title: {
    marginLeft: 10,
  },
  titleText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
    color: "#ffffff",
    letterSpacing: -0.08,
    lineHeight: 20,
  },
  message: {
    marginLeft: 20,
  },
  messageText: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 15,
    color: "#ffffff",
    letterSpacing: -0.08,
    lineHeight: 20,
  },
});
export default Notification;

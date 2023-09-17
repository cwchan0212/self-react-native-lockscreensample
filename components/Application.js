import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Animated } from "react-native";

const Application = (props) => {

  let app = props.app;

  let rotateZ = props.animatedValue ? props.animatedValue : "0deg";
  let numberStyle = app.number == undefined ? styles.displayNone : "";  
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert("Open the " + app.name + " app");
      }}
      onLongPress={() => {
        props._setDeleteMode(!props.deleteMode);
        props._setStartAnimated(); // Corrected prop name
      }}
    >
      <Animated.View style={[styles.app, { transform: [{ rotateZ: rotateZ }] }]}>
        <View
          style={{
            width: 74,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            top: -10,
          }}
        >
          <View style={{ position: "relative", left: 0 }}>
            <Image source={require("../assets/images/dark/Close_Icon.png")} style={[styles.closeIcon, props.deleteMode ? null : styles.displayNone]} />
          </View>
          <View style={{ position: "relative", right: 0 }}>
            <View style={[styles.number, numberStyle]}>
              <Text style={styles.numberText}>{app.number}</Text>
            </View>
          </View>
        </View>
        <Image source={app.icon} style={styles.appIcon} />
        <Text style={styles.appText}>{app.name}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    app: {
      width: 72,
      height: 76,
      margin: 11,
      // marginLeft: 8,
      // marginRight: 8,
      marginBottom: 23,
      paddingTop: 10,
      // backgroundColor: '#ffffff',
      alignItems: "center",
      justifyContent: "space-between",
    },
    appIcon: {
      width: 72,
      height: 72,
      zIndex: -1,
    },
    appText: {
      fontFamily: "SFProDisplay-Regular",
      fontSize: 12,
      color: "#ffffff",
      letterSpacing: 0,
    },
    closeIcon: {
      width: 24,
      height: 24,
      marginTop: 15,
      // display: 'none',
    },
    number: {
      width: 24,
      height: 24,      
      borderRadius: 24,
      backgroundColor: "#ff375f",
      textAlign: "center",
      justifyContent: "center",
      marginTop: 15,
      // display: 'none',
    },
    numberText: {
      fontFamily: "SFProDisplay-Regular",
      fontSize: 14,
      color: "#ffffff",
      letterSpacing: 0,
      textAlign: "center",
      justifyContent: 'center',
      marginTop: -4,
    },
    displayNone: {
      display: 'none'
    },
  
  });

export default Application;
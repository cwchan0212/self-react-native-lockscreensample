import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity, ImageBackground } from "react-native";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const LockScreenPasscode = () => {
  const [passcode, setPasscode] = useState(Array(4).fill(""));
  const correctPasscode = ["1", "2", "3", "4"];

  const onPressNumber = (num) => {
    const tempCode = [...passcode]; // Create a copy of the passcode array
    for (let i = 0; i < tempCode.length; i++) {
      if (tempCode[i] === "") {
        tempCode[i] = num;
        // add to check correct code
        if (i === 3) {
            checkPasscode(tempCode);
          }
        break;
      }
    }
    setPasscode(tempCode); // Update the state with the modified copy
  };

  const onPressCancel = () => {
    const tempCode = [...passcode]; // Create a copy of the passcode array
    for (let i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== "") {
        tempCode[i] = "";
        break;
      }
    }
    setPasscode(tempCode); // Update the state with the modified copy
  };

  // Add to check the unlock code
  const checkPasscode = (enteredPasscode) => {
    if (JSON.stringify(enteredPasscode) === JSON.stringify(correctPasscode)) {
      // Passcode is correct, perform unlock action here
      console.log("Unlocking the screen");
      // You can navigate to the home screen or perform any other unlock action
    } else {
      // Incorrect passcode, you can handle this case accordingly
      console.log("Incorrect passcode");
    }
  };

  let numbers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 }];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/dark/Background.jpg")}
        style={{
          position: "absolute",
          top: 0,
          width: width,
          height: height,
          borderWidth: 1,
        }}
        blurRadius={40}
      />
      <View style={styles.swipe}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/images/dark/Locked_Icon.png")}
            style={{
              width: 13.9,
              height: 20,
              marginRight: 8,
            }}
          />
          <Text style={styles.swipeUpText}>Swipe up to unlock</Text>
        </View>
        <View style={{ marginTop: 75 }}>
          <View>
            <Text style={styles.passcodeText}>Enter Passcode</Text>
          </View>
          <View style={styles.codeContainer}>
            {passcode.map((p, index) => {
              let style = p != "" ? styles.code2 : styles.code1;
              return <View key={index} style={style}></View>;
            })}
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.numbersContainer}>
          {numbers.map((num, index) => {
            return (
              <TouchableOpacity key={num.id} style={styles.number} onPress={() => onPressNumber(`${num.id}`)}>
                <Text style={styles.numberText}>{num.id}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity>
          <View>
            <Text style={styles.buttonText}>Emergency</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText} onPress={() => onPressCancel()}>
              Cancel
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  swipe: {
    marginTop: 20, //add marginTop to 20
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeUpText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    color: "#ffffff",
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  passcodeText: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 22,
    color: "#ffffff",
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  code1: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  code2: {
    width: 13,
    height: 13,
    borderRadius: 13,
    backgroundColor: "#ffffff",
  },

  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 58,
    width: 282,
    height: 348,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'red',
  },
  numberText: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 36,
    color: "#ffffff",
    letterSpacing: 0,
    textAlign: "center",
  },
  buttons: {
    flex: 1,
    marginTop: 73,
    marginLeft: 46,
    marginRight: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    width: width - 50,
  },
  buttonText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: -0.39,
    textAlign: "center",
  },
});

export default LockScreenPasscode;

import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Favorites from "./Favorites";
import Recents from "./Recents";
import Contacts from "./Contacts";
import Keypad from "./Keypad";
import Voicemail from "./Voicemail";

const Tab = createBottomTabNavigator();

const ContactsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        tabBarActiveTintColor: "#8a84ff",
        tabBarStyle: { backgroundColor: "#161616" },
      }}
    >
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ focused, color, size }) => (
            <Text
              style={{
                fontFamily: "SFProText-Regular",
                color: color,
                fontSize: 20,
              }}
            >
              􀋃
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Recents"
        component={Recents}
        options={{
          tabBarLabel: "Recents",
          tabBarIcon: ({ focused, color, size }) => (
            <Text
              style={{
                fontFamily: "SFProText-Regular",
                color: color,
                fontSize: 20,
              }}
            >
              􀐬
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contacts}
        options={{
          tabBarLabel: "Contacts",
          tabBarIcon: ({ focused, color, size }) => (
            <Text
              style={{
                fontFamily: "SFProText-Regular",
                color: color,
                fontSize: 20,
              }}
            >
              􀉮
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Keypad"
        component={Keypad}
        options={{
          tabBarLabel: "Keypad",
          tabBarIcon: ({ focused, color, size }) => (
            <Text
              style={{
                fontFamily: "SFProText-Regular",
                color: color,
                fontSize: 20,
              }}
            >
              􀦳
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Voicemail"
        component={Voicemail}
        options={{
          tabBarLabel: "Voicemail",

          tabBarIcon: ({ focused, color, size }) => (
            <Text
              style={{
                fontFamily: "SFProText-Regular",
                color: color,
                fontSize: 20,
              }}
            >
              􀕼
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ContactsScreen;

import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import { Home, TimeTable, Marks, Profile, HomeWork } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tapNav,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.homePNG}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.darkBlue : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.darkBlue : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedual"
        // component={TimeTable}
        component={HomeWork}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.homeWrokPNG}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.darkBlue : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.darkBlue : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Home Work
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.profilePNG}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.darkBlue : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.darkBlue : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Marks"
        component={Marks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.timeTablePNG}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.darkBlue : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.darkBlue : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Applications
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.settingPng}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.darkBlue : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.darkBlue : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tapNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderTopColor: "transparent",
    height: 70,
  },
  tapScreenView: {
    alignItems: "center",
    justifyContent: "center",
  },
  tapScreenImg: {
    width: 35,
    height: 40,
  },
});

export default Tabs;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {Attendance, HomeWork, Application, Complaints, Circular} from './index';
import FineHistory from './FineHistory';

const Stack = createStackNavigator();
// card
const HomeButton = ({icon, text, notification, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={[styles.cardShadow]}>
        <View style={styles.cardContainer}>
          <Image
            source={icon}
            resizeMode="contain"
            style={[styles.homeImages]}
          />
          <Text style={styles.homeBtnText}> {text} </Text>
        </View>
        {notification === '0' ? null : (
          <View style={styles.homeNotifications}>
            <Text
              style={{
                color: 'white',
              }}>
              0{notification}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
// row for holding cards
const HomeButtonRow = ({
  icon1,
  icon2,
  text1,
  text2,
  notification1,
  notification2,
  navigation,
}) => {
  return (
    <View style={styles.homeButtonRow}>
      <HomeButton
        icon={icon1}
        text={text1}
        notification={notification1}
        navigation={navigation}
      />
      <HomeButton
        icon={icon2}
        text={text2}
        notification={notification2}
        navigation={navigation}
      />
    </View>
  );
};

// list of naviagations
const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView bounces={true}>
          <HomeButtonRow
            icon1={icons.attendancePNG}
            text1="Attendance"
            notification1="0"
            icon2={icons.homeWrokPNG}
            text2="Home Work"
            notification2="7"
            navigation={navigation}
          />
          <HomeButtonRow
            icon1={icons.applicaitonPNG}
            text1="Applicaiton"
            notification1="2"
            icon2={icons.settingPng}
            text2="Circular"
            notification2="0"
            navigation={navigation}
          />
          <HomeButtonRow
            icon1={icons.compaintPNG}
            text1="Complaint"
            notification1="8"
            icon2={icons.finePNG}
            text2="Fine"
            notification2="0"
            navigation={navigation}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const Home = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Homes'}>
      <Stack.Screen name="Homes" component={HomePage} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Home Work" component={HomeWork} />
      <Stack.Screen name="Applicaiton" component={Application} />
      <Stack.Screen name="Complaint" component={Complaints} />
      <Stack.Screen name="Fine" component={FineHistory} />
      <Stack.Screen name="Circular" component={Circular} />

      {/* <Stack.Screen name="Complaint" component={Complaints} /> */}
    </Stack.Navigator>
  );
};

////
////
////
////
////
////
////
////
////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
    paddingTop: 25,
    // backgroundColor: "red",

    display: 'flex',
  },
  shadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,

    elevation: 3,
  },
  homeButton: {
    height: 180,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 15,
  },
  homeButtonRow: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 25,
  },
  cardShadow: {
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    height: 180,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  homeImages: {
    height: 130,
    width: 130,
  },
  homeBtnText: {
    ...FONTS.body2,
    color: COLORS.darkBlue,
    fontWeight: '700',
  },
  homeNotifications: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    zIndex: 10,
    backgroundColor: COLORS.darkBlue,

    borderRadius: 25,
  },
});

export default Home;

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Button,
} from 'react-native';

import {COLORS, FONTS, icons} from '../constants';
import TopInformationBar from './compnents/TopInformationBar/_topInformationBar';
const SchoolInformation = () => {
  return (
    <View style={[{flex: 1}, styles.flex]}>
      <View style={styles.flex}>
        <Image style={styles.image} source={icons.schoolPNG} />
      </View>
      <View
        style={[
          styles.flex,
          {
            flexDirection: 'row',
            marginTop: 25,
          },
        ]}>
        <View
          style={{
            // flexDirection: 'row',
            marginRight: 15,
          }}>
          <Text style={styles.leaveLbl}>Name</Text>
          <Text style={styles.leaveLbl}>Location</Text>
          <Text style={styles.leaveLbl}>Email Address</Text>
          <Text style={styles.leaveLbl}>Mobile Number</Text>
          <Text style={styles.leaveLbl}>Land Line Number</Text>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            paddingLeft: 15,
            borderLeftWidth: 5,
            borderLeftColor: COLORS.darkBlue,
            borderRadius: 1,
          }}>
          <Text style={styles.leaveTxt}>City School</Text>
          <Text style={styles.leaveTxt}>F-7, Islamabad</Text>
          <Text style={styles.leaveTxt}>city@gmail.com</Text>
          <Text style={styles.leaveTxt}>0335-8581399</Text>
          <Text style={styles.leaveTxt}>924578-47</Text>
        </View>
      </View>
    </View>
  );
};
const ContactSchool = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <TopInformationBar menu={'School Information'} />

        {/* Last 7 Applications */}
        <SafeAreaView
          style={[
            styles.flex,
            {
              flex: 1,
              flexDirection: 'row',
            },
          ]}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
            <SchoolInformation />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },

  leaveTxt: {
    color: 'black',
    ...FONTS.h3,
    marginBottom: 5,
  },
  leaveLbl: {
    ...FONTS.h3,
    marginBottom: 5,
    textAlign: 'right',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    padding: 5,
    borderColor: COLORS.darkBlue,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactSchool;

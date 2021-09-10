/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons} from '../constants';
import ProfileTile from './compnents/ProfileTile/prfileTile';
import TopInformationBar from './compnents/TopInformationBar/_topInformationBar';

const InformationTile = ({type, title, placeHolder, buttonMessage}) => {
  const [showTile, setShowTile] = useState(false);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const validatePassword = (p1, p2 = '') => {
    // console.log(p1.match('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'));
    if (p1.match(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/)) {
      console.log(p1.match('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'));
      return true;
    }
    if (p1 === p2) {
      return true;
    }
    return false;
  };
  const validateNumber = number => {
    return true;
  };
  return (
    <View style={styles.profileTile}>
      <TouchableOpacity
        onPress={() => {
          showTile === false ? setShowTile(true) : setShowTile(false);
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            height: 45,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',

              ...FONTS.h2,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: showTile === true ? 'flex' : 'none',
        }}>
        <TextInput
          style={styles.inputs}
          placeholder={placeHolder}
          placeholderTextColor={'rgba(11, 74, 138,0.6)'}
          onChangeText={text => {
            setPassword1(text);
            setMessage('');
          }}
          borderColor={validatePassword(password1) === false ? 'red' : 'white'}
          borderWidth={2}
        />
        {type === 'password' ? (
          <TextInput
            style={styles.inputs}
            placeholder="Conform Password"
            placeholderTextColor={'rgba(11, 74, 138,0.6)'}
            onChangeText={text => setPassword2(text)}
            borderColor={
              validatePassword(password2) === false ? 'red' : 'white'
            }
            borderWidth={2}
          />
        ) : null}
        <Text
          style={{
            color: COLORS.white,
            textAlign: 'center',
            paddingTop: 5,
            ...FONTS.h3,
          }}>
          {message}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (type === 'password') {
              if (validatePassword(password1, password2) === true) {
                setMessage('Password Matched');
                console.log('success');
              } else {
                setMessage('Password failed to match');
                console.log('fail');
              }
            }
            if (type === 'number') {
              if (validateNumber(password1) === true) {
                setMessage('Password Matched');
              } else {
                setMessage('Password failed to match');
              }
            }
          }}
          style={[styles.showAttendance, styles.btn]}>
          <Text
            style={{
              color: COLORS.darkBlue,
              ...FONTS.h3,
            }}>
            {buttonMessage}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Profile = () => {
  let Image_Http_URL = {
    uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
  };
  return (
    <View style={[styles.container]}>
      <TopInformationBar menu={'Profile'} />
      {/* Top */}
      <View style={styles.profileTop}>
        {/* Information Containor */}
        <View style={styles.infoContainor}>
          {/* Nmae and Age School View */}

          <View style={styles.infoContainor_body}>
            <View style={styles.containor_NameUni}>
              <Text style={styles.name}>SHAHRUKH</Text>
              <Text style={styles.year}>{'   '}( 23 Yr ) </Text>
            </View>
            <View style={styles.containor_report}>
              <Image
                source={icons.chemistry}
                resizeMode="contain"
                style={styles.profile_img}></Image>
              <Text style={styles.uni}> COMSATS </Text>
            </View>
          </View>
          {/* Attandence and Marks and class View */}

          <View style={styles.report}>
            {/* attendence */}
            <View style={styles.reportBox}>
              <Text style={styles.reportBox_figure}>98%</Text>
              <Text>Attandence</Text>
            </View>
            {/* attendence */}
            {/* marks */}
            <View style={styles.reportBox}>
              <Text style={styles.reportBox_figure}>7.8</Text>
              <Text>Avg Marks</Text>
            </View>
            {/* marks */}
            {/* class */}
            <View style={styles.reportBox}>
              <Text style={styles.reportBox_figure}>2</Text>
              <Text>Class</Text>
            </View>
            {/* class */}
          </View>
        </View>

        {/* Image Contaior */}
        <View
          style={{
            // position: 'absolute',
            width: '25%',
            height: '50%',
            borderRadius: 10,
            // backgroundColor: COLORS.gray,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginBottom: 25,
          }}>
          {/* <Image
            source={icons.profile}
            resizeMode="contain"
            style={{
              width: '70%',
              height: '70%',
              tintColor: COLORS.softWhite,
              marginRight: '5%',
              zIndex: 2,
            }}></Image> */}
          <Image style={styles.image} source={Image_Http_URL} />
        </View>
      </View>
      {/* body */}
      <View
        style={{
          flex: 1,
          marginTop: '35%',
          // backgroundColor: COLORS.darkBlue,
          position: 'relative',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <InformationTile
              title="Update Password"
              placeHolder="Enter New Password"
              buttonMessage="Update Password"
              type="password"
            />
            <InformationTile
              title="Update Phone Number"
              placeHolder="Enter New Number"
              buttonMessage="Update Phone Number"
              type="number"
            />
            {/* <ProfileTile message={'Update Profile'} />
            <ProfileTile message={'Student Info'} />
            <ProfileTile message={'Student Progress'} />
            <ProfileTile message={'Time Table'} /> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    backgroundColor: COLORS.softWhite,
    // backgroundColor: "red",
  },
  image: {
    width: 90,
    height: 95,
    borderRadius: 45,
    borderWidth: 2,

    // borderColor: '#2575C0',
  },
  scrollView: {
    // marginTop: 10,
    // paddingBottom: 50,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: -1,
    elevation: 8,
  },
  profileTop: {
    width: '100%',
    height: '25%',
    backgroundColor: COLORS.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  infoContainor: {
    position: 'absolute',
    width: '80%',
    height: '120%',
    top: '50%',
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
    padding: '5%',
  },
  infoContainor_body: {
    height: '40%',
    width: '100%',
    backgroundColor: COLORS.softWhite,
    marginTop: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  containor_NameUni: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...FONTS.body2,
    color: COLORS.darkBlue,
    fontWeight: '700',
  },
  year: {
    ...FONTS.body3,
    color: COLORS.darkBlue,
  },
  containor_report: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 7,
    alignItems: 'center',
  },
  profile_img: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
    marginRight: '5%',
  },
  uni: {
    ...FONTS.body2,
    color: COLORS.gray,
    fontWeight: '600',
  },
  report: {
    height: '40%',
    width: '100%',
    //   backgroundColor: COLORS.yellow,
    marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.softWhite,
    marginBottom: 5,
    //   marginTop: "12%",
  },
  reportBox: {
    width: '30%',
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  reportBox_figure: {
    ...FONTS.body2,
    color: COLORS.darkBlue,
    fontWeight: '700',
  },
  showAttendance: {
    height: 50,
    backgroundColor: COLORS.tomato,
    borderRadius: 7,
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  profileTile: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: COLORS.darkBlue,
  },
  inputs: {
    height: 45,
    backgroundColor: 'white',
    fontSize: 20,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    borderTopColor: 'black',
    borderRadius: 5,
    marginTop: 15,
    color: COLORS.darkBlue,
    textAlign: 'center',
  },
  btn: {
    color: COLORS.darkBlue,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'white',
  },
});

export default Profile;

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
  Button,
} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {useState, useEffect} from 'react';
import {COLORS, FONTS} from '../constants';
import TopInformationBar from './compnents/TopInformationBar/_topInformationBar';
// MAterial UI
import ComboBox from './compnents/ComboBox';
import PaperDatePicker from './compnents/PaperDatePicker';
import LabelTile from './compnents/LabelTile';
import CodePin from 'react-native-pin-code';
// data

const PinCode = () => {
  const [hidePinPad, setPinPad] = useState(false);
  const [pinCorrect, setPinCorrect] = useState(false);
  const [pin, setPin] = useState('1234');
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <TopInformationBar menu={'Pin Code'} />
        {/* Enter Password  */}
        {/* To update and Veiw the Pin Code */}

        <View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.darkBlue,
                ...FONTS.h3,
              }}>
              Pin:{' '}
              <Text
                style={{
                  color: COLORS.darkBlue,
                  ...FONTS.h3,
                }}>
                4567
              </Text>
            </Text>
            <TouchableOpacity onPress={() => setPinPad(true)}>
              <Text
                style={{
                  color: COLORS.darkBlue,
                  ...FONTS.h3,
                }}>
                Update Pin Code
              </Text>
            </TouchableOpacity>
          </View>

          {/* input */}
          <TextInput
            editable={pinCorrect === true ? true : false}
            style={{
              height: 45,
              backgroundColor: 'white',
              fontSize: 20,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              marginTop: 15,
              color: COLORS.darkBlue,
              textAlign: 'center',
            }}
            placeholder="Enter New Pin Code"
            placeholderTextColor={COLORS.darkBlue}
            // onChangeText={text => this.setState({text})}
          />

          {/* submit Update */}
          <TouchableOpacity
            // onPress={() => setPinPad(true)}
            style={[
              styles.showAttendance,
              {
                backgroundColor: COLORS.darkBlue,
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              },
            ]}>
            <Text
              style={{
                color: 'white',
              }}>
              Update Pin Code
            </Text>
          </TouchableOpacity>
        </View>

        {/* Key pad */}
        <View
          style={{
            width: '100%',

            display: hidePinPad === true ? 'flex' : 'none',
          }}>
          <CodePin
            number={4}
            checkPinCode={(code, callback) => callback(code === pin)}
            success={() => {
              setPinPad(false);
              setPinCorrect(true);
            }}
            text="Enter OTP"
            error="You fail"
            autoFocusFirst={true}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  showAttendance: {
    height: 50,
    backgroundColor: COLORS.tomato,
    borderRadius: 7,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
});

export default PinCode;

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
import {useState} from 'react';
import {COLORS, FONTS} from '../constants';
import TopInformationBar from './compnents/TopInformationBar/_topInformationBar';
// MAterial UI
import ComboBox from './compnents/ComboBox';
import PaperDatePicker from './compnents/PaperDatePicker';
import LabelTile from './compnents/LabelTile';

// data
// startt
const ShowLastAttendance = ({status, date}) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        show === true ? setShow(false) : setShow(true);
      }}>
      <View
        style={{borderBottomWidth: 2, borderBottomColor: COLORS.darkBlueFade}}>
        <View style={styles.showLastAttendance}>
          <Text
            style={
              ([styles.showAttendanceText],
              {
                color: COLORS.darkBlue,
                ...FONTS.h4,
              })
            }>
            {date}
          </Text>
          <Text
            style={
              ([styles.showAttendanceText],
              {
                color:
                  status === 'Rejected'
                    ? COLORS.tomato
                    : status === 'Pending'
                    ? COLORS.waterBlue
                    : COLORS.darkBlue,
                ...FONTS.h4,
              })
            }>
            {status}
          </Text>
        </View>
        {/* Leave Application Information */}
        <View
          style={[
            {
              backgroundColor: COLORS.darkBlue,
              borderRadius: 8,
              display: show === false ? 'none' : 'flex',
            },
          ]}>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Title</Text>
            <Text style={styles.leaveTxt}>Sick Leave</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>To</Text>
            <Text style={styles.leaveTxt}>12/03/2021</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>From</Text>
            <Text style={styles.leaveTxt}>12/03/2021</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Submitted</Text>
            <Text style={styles.leaveTxt}>Shahrukh Fazal</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Attendance = () => {
  // States
  let [application, setApplication] = useState('');
  let [select, setSelect] = useState(2);
  const [visible, setVisible] = React.useState(false);
  const [dates, setDates] = React.useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <TopInformationBar menu={'Application'} />
        {/* Combox box */}
        <ComboBox application={application} setApplication={setApplication} />
        {/* starting date */}
        <PaperDatePicker
          visible={visible}
          setDates={setDates}
          setVisible={setVisible}
          buttonText="Leave from Date"
        />
        {/* ending date */}
        <PaperDatePicker
          visible={visible}
          setDates={setDates}
          setVisible={setVisible}
          buttonText="Leave to Date"
        />

        {/* Gariden Name */}
        <TextInput
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
          placeholder="Gardien Name"
          placeholderTextColor={COLORS.darkBlue}
          // onChangeText={text => this.setState({text})}
        />

        {/* Submit Leave Applications */}
        <TouchableOpacity
          // onPress={() => setVisible(true)}
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
            Submit Applications
          </Text>
        </TouchableOpacity>

        {/* Last 7 Leave Applciations */}
        <LabelTile title="Last 7 Applications" />

        {/* Last 7 Applications */}
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
            <ShowLastAttendance status="Pending" date="12 July 2021" />
            <ShowLastAttendance status="Accepted" date="11 July 2021" />
            <ShowLastAttendance status="Rejected" date="10 July 2021" />
            <ShowLastAttendance status="Accepted" date="09 July 2021" />
            <ShowLastAttendance status="Accepted" date="08 July 2021" />
            <ShowLastAttendance status="Rejected" date="07 July 2021" />
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
  showAttendanceText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  showLastAttendance: {
    height: 50,
    borderRadius: 7,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,

    // backgroundColor: "red",
  },
  leaveTxt: {
    color: 'white',
    ...FONTS.h4,
  },
});

export default Attendance;

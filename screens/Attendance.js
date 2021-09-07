/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  View,
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
import {DatePickerModal, Icons} from 'react-native-paper-dates';
import {COLORS, FONTS} from '../constants';
import TopInformationBar from './compnents/TopInformationBar/_topInformationBar';
import PaperDatePicker from './compnents/PaperDatePicker';

// Component to render

const LabelTile = ({title}) => {
  return (
    <View style={styles.labelTile}>
      <Text style={styles.labelTileText}>{title}</Text>
      <View style={styles.labelTileLine}></View>
    </View>
  );
};
const ShowAttendance = ({status, date}) => {
  return (
    <View
      style={[
        styles.showAttendance,
        {
          backgroundColor:
            status === 'Absent'
              ? COLORS.tomato
              : status === 'Leave'
              ? COLORS.waterBlue
              : COLORS.darkBlue,
        },
      ]}>
      <Text style={styles.showAttendanceText}>{date}</Text>
      <Text style={styles.showAttendanceText}>{status}</Text>
    </View>
  );
};

const ThisSession = () => {
  return (
    <View style={styles.thisSession}>
      <View style={styles.thisSessionRow}>
        <Text style={styles.thisSessionRowCircle}>P</Text>
        <Text style={styles.thisSessionRowPercent}>90%</Text>
      </View>
      <View style={styles.thisSessionRow}>
        <Text style={styles.thisSessionRowCircle}>A</Text>
        <Text style={styles.thisSessionRowPercent}>10%</Text>
      </View>
      <View style={styles.thisSessionRow}>
        <Text style={styles.thisSessionRowCircle}>L</Text>
        <Text style={styles.thisSessionRowPercent}>5%</Text>
      </View>
    </View>
  );
};
const ShowLastAttendance = ({status, date}) => {
  return (
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
              status === 'Absent'
                ? COLORS.tomato
                : status === 'Leave'
                ? COLORS.waterBlue
                : COLORS.darkBlue,
            ...FONTS.h4,
          })
        }>
        {status}
      </Text>
    </View>
  );
};
// startt
const Attendance = () => {
  let [select, setSelect] = useState(2);
  const [visible, setVisible] = React.useState(false);
  const [dates, setDates] = useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <TopInformationBar menu={'Attendance'} />

        <Text style={styles.name}>Shahrukh khan Fazal</Text>

        <LabelTile title="Today's Attendance" />

        {/* showAttendanc */}
        <ShowAttendance status="Present" date="12 July 2021" />
        {/* Date Picker */}

        <PaperDatePicker
          visible={visible}
          setVisible={setVisible}
          setDates={setDates}
          buttonText="Select Date"
        />
        <LabelTile title="This Session" />

        <ThisSession />

        <LabelTile title="Last 7 days" />
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
            <ShowLastAttendance status="Absent" date="12 July 2021" />
            <ShowLastAttendance status="Leave" date="11 July 2021" />
            <ShowLastAttendance status="Present" date="10 July 2021" />
            <ShowLastAttendance status="Absent" date="09 July 2021" />
            <ShowLastAttendance status="Leave" date="08 July 2021" />
            <ShowLastAttendance status="Absent" date="07 July 2021" />
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
  labelTile: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    padding: 5,
  },
  labelTileText: {
    color: COLORS.darkBlue,
    ...FONTS.h4,
  },
  labelTileLine: {
    flex: 1,
    marginTop: 4,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: COLORS.darkBlueFade,
  },
  name: {
    color: COLORS.darkBlue,
    ...FONTS.h2,
    textAlign: 'center',
    width: '100%',
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
  thisSession: {
    height: 80,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  thisSessionRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thisSessionRowCircle: {
    borderWidth: 2,
    borderColor: COLORS.darkBlue,
    textAlign: 'center',
    paddingTop: 15,
    borderRadius: 100,
    height: 70,
    width: 70,
    ...FONTS.h2,
    color: COLORS.darkBlue,
    marginTop: 50,
    // marginBottom: 50,
  },
  thisSessionRowPercent: {
    ...FONTS.h3,
    marginTop: 5,
    color: COLORS.darkBlue,
  },
  showLastAttendance: {
    height: 50,
    borderRadius: 7,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.darkBlueFade,
    // backgroundColor: "red",
  },
});

export default Attendance;

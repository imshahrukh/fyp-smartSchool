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
const ShowLastAttendance = ({status, title}) => {
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
            {title}
          </Text>
          <Text
            style={
              ([styles.showAttendanceText],
              {
                color: status === 'Active' ? COLORS.tomato : COLORS.darkBlue,
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
            <Text style={styles.leaveTxt}>Cheating</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Date</Text>
            <Text style={styles.leaveTxt}>12/03/2021</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Submitted</Text>
            <Text style={styles.leaveTxt}>Shahrukh Fazal</Text>
          </View>
          <View
            style={[
              styles.showLastAttendance,
              {
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: 'auto',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(245,245,245,0.5)',
              },
            ]}>
            <Text style={[styles.leaveTxt, styles.leaveLbl]}>Discription</Text>
            <Text style={styles.leaveTxt}>
              This is typically due to a difference in line endings, especially
              the difference in LF vs. CRLF . Unix systems like Linux and macOS
              use LF , the line feed character, for line breaks by default.
              Windows,{' '}
            </Text>
          </View>
          <View
            style={[
              styles.showLastAttendance,
              {
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: 'auto',
              },
            ]}>
            <Text style={[styles.leaveTxt, styles.leaveLbl]}>Remarks</Text>
            <Text style={styles.leaveTxt}>
              This is typically due to a difference in line endings, especially
              the difference in LF vs. CRLF . Unix systems like. Windows
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Complaints = () => {
  // States
  const comboxBoxObjects = [
    'Last 7 Complaints',
    'Active Complaints',
    'Closed Complaints',
    'All Complaints',
    'Fee Complaints',
    'Dress Voilation Complaints',
  ];
  let [application, setApplication] = useState(comboxBoxObjects[0]);
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
        <TopInformationBar menu={'Complaints'} />
        {/* Combox box */}
        <ComboBox
          comboxBoxObjects={comboxBoxObjects}
          application={application}
          setApplication={setApplication}
        />

        {/* Last 7 Leave Applciations */}
        <LabelTile title={application} />

        {/* Last 7 Applications */}
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
            <ShowLastAttendance status="Active" title="Dress Code Voliation" />
            <ShowLastAttendance status="Closed" title="Late Fee Submission" />
            <ShowLastAttendance status="Active" title="Code BUzz" />
            <ShowLastAttendance status="Closed" title="Dress Code Voliation" />
            <ShowLastAttendance status="Closed" title="Shutup" />
            <ShowLastAttendance status="Active" title="Cheating Case" />
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
  leaveLbl: {
    ...FONTS.h2,
    marginBottom: 5,
  },
});

export default Complaints;

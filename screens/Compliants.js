/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
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
const comboxBoxObjects = [
  'Last 7 Complaints',
  'All Complaints',
  'Active',
  'Closed',
  'Fee Complaints',
  'Dress Voilation Complaints',
];
const complaints = [
  {
    type: 'Fee Complaints',
    date: '12/12/2021',
    filedBy: 'teacher_id',
    description:
      'As events continue to evolve in the digital landscape, you might have seen some fun and engaging personalized event tickets shared on social media for GraphQL Conf and Next.js Conf in 2021. I love this idea',
    status: 'Closed',
    respondant: 'Name',
    remarks:
      'As events continue to evolve in the digital landscape, As events continue to evolve in the digital landscape, As events continue to evolve in the digital landscape,',
  },
  {
    type: 'Dress Voilation Complaints',
    date: '12/12/2021',
    filedBy: 'teacher_id',
    description:
      'As events continue to evolve in the digital landscape, you might have seen some fun and engaging personalized event tickets shared on social media for GraphQL Conf and Next.js Conf in 2021. I love this idea',
    status: 'Active',
    respondant: 'Name',
    remarks: 'As events continue to evolve in the digital landscape,',
  },
  {
    type: 'Fee Complaints',
    date: '12/12/2021',
    filedBy: 'teacher_id',
    description:
      'As events continue to evolve in the digital landscape, you might have seen some fun and engaging personalized event tickets shared on social media for GraphQL Conf and Next.js Conf in 2021. I love this idea',
    status: 'Active',
    respondant: 'Name',
    remarks: 'As events continue to evolve in the digital landscape,',
  },
  {
    type: 'Dress Voilation Complaints',
    date: '12/12/2021',
    filedBy: 'teacher_id',
    description:
      'As events continue to evolve in the digital landscape, you might have seen some fun and engaging personalized event tickets shared on social media for GraphQL Conf and Next.js Conf in 2021. I love this idea',
    status: 'Closed',
    respondant: 'Name',
    remarks: 'As events continue to evolve in the digital landscape,',
  },
];
// startt
const ShowLastAttendance = ({data}) => {
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
            {data.type}
          </Text>
          <Text
            style={
              ([styles.showAttendanceText],
              {
                backgroundColor:
                  data.status === 'Active' ? COLORS.tomato : COLORS.darkBlue,
                ...FONTS.h4,
                color: 'white',
                borderRadius: 5,
                padding: 5,
                height: 32,
                width: 80,
                textAlign: 'center',
              })
            }>
            {data.status}
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
            <Text style={styles.leaveTxt}>{data.type}</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Date</Text>
            <Text style={styles.leaveTxt}>{data.date}</Text>
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
            <Text style={styles.leaveTxt}>{data.description}</Text>
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
            <Text style={styles.leaveTxt}>{data.remarks}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Complaints = () => {
  // States

  let [application, setApplication] = useState('Last 7 Complaints');
  let [data, setData] = useState(complaints);

  const get7Days = () => {
    return complaints.slice(0, complaints.length >= 8 ? 7 : complaints.length);
  };
  const getByStatus = () => {
    return complaints.filter(
      el => el.status === application || el.type === application,
    );
  };

  useEffect(() => {
    if (application === comboxBoxObjects[0]) {
      setData(get7Days());
    } else if (application === comboxBoxObjects[1]) {
      setData(complaints);
    } else {
      setData(getByStatus());
    }
  }, [application]);
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
            {data.map((item, key) => (
              <ShowLastAttendance key={key} data={item} />
            ))}

            {/* <ShowLastAttendance status="Closed" title="Late Fee Submission" />
            <ShowLastAttendance status="Active" title="Code BUzz" />
            <ShowLastAttendance status="Closed" title="Dress Code Voliation" />
            <ShowLastAttendance status="Closed" title="Shutup" />
            <ShowLastAttendance status="Active" title="Cheating Case" /> */}
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

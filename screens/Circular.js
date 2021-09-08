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

// data
const dataCircular = [
  {
    classes: ['3B', '6A'],
    subject: 'Covid Protection',
    date: '12/14/2012',
    body: 'his might be surprising but length property of an array is not only used to get number of array elements but its also writable and can be used',
    issuedBy: 'Administration',
    status: 'Active',
  },
  {
    classes: ['3B', '6A'],
    subject: 'Green Pakistan',
    date: '12/14/2012',
    body: 'his might be surprising but length property of an array is not only used to get number of array elements but its also writable and can be used',
    issuedBy: 'Administration',
    status: 'Active',
  },
  {
    classes: ['3B', '6A'],
    subject: 'Women Protaction Bill',
    date: '12/14/2012',
    body: 'his might be surprising but length property of an array is not only used to get number of array elements but its also writable and can be used',
    issuedBy: 'Administration',
    status: 'Closed',
  },
  {
    classes: ['3B', '6A'],
    subject: 'Education',
    date: '12/14/2012',
    body: 'his might be surprising but length property of an array is not only used to get number of array elements but its also writable and can be used',
    issuedBy: 'Administration',
    status: 'Closed',
  },
  {
    classes: ['3B', '6A'],
    subject: 'Life After Death',
    date: '12/14/2012',
    body: 'his might be surprising but length property of an array is not only used to get number of array elements but its also writable and can be used',
    issuedBy: 'Administration',
    status: 'Active',
  },
];

// const ComboBoxValue = {
//   Pending:
// }
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
            {data.subject}
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
            <Text style={styles.leaveTxt}>Date</Text>
            <Text style={styles.leaveTxt}>{data.date}</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Issued By</Text>
            <Text style={styles.leaveTxt}>{data.issuedBy}</Text>
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
            <Text style={styles.leaveTxt}>{data.body}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Circular = () => {
  // States
  const comboxBoxObjects = ['Active', 'Closed', 'All Circular'];
  const getDataByStatus = () => {
    return dataCircular.filter(el => el.status === application);
  };

  let [application, setApplication] = useState('All Circular');
  let [select, setSelect] = useState(2);
  let [circularData, setCircularData] = useState(dataCircular);
  // filter data
  // check if the application object contain value of a combo box
  // like pending submiited or due date passed if yes call the methods according
  // Condition
  useEffect(() => {
    if (
      application === comboxBoxObjects[0] ||
      application === comboxBoxObjects[1]
    ) {
      setCircularData(getDataByStatus());
      // console.log(fineData);
    }
    if (application === comboxBoxObjects[2]) {
      setCircularData(dataCircular);
      // console.log(fineData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <TopInformationBar menu={'Circular'} />
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
            {circularData.map((el, key) => (
              <ShowLastAttendance key={key} data={el} />
            ))}
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

export default Circular;

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
const dataFine = [
  {
    Violation: {
      title: 'Belt and Tie Missing',
    },
    status: 'Pending Fine',
    amount: '250',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Exame Cheating',
    },
    status: 'Submitted Fine',
    amount: '2050',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Uniform Voliation',
    },
    status: 'Due Date Passed',
    amount: '50',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Dress Code Voilation',
    },
    status: 'Due Date Passed',
    amount: '2050',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Late Fee Submittion',
    },
    status: 'Submitted Fine',
    amount: '2050',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Dress Code Voilation',
    },
    status: 'Due Date Passed',
    amount: '2050',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Late Fee Submittion',
    },
    status: 'Submitted Fine',
    amount: '2050',
    date: '12/1/2021',
    dueDate: '18/1/2021',
  },
  {
    Violation: {
      title: 'Late Fee Submittion',
    },
    status: 'Submitted Fine',
    amount: '2050',
    date: '12/1/2021',
    dueDate: '18/1/2021',
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
            {data.Violation.title}
          </Text>
          <Text
            style={
              ([styles.showAttendanceText],
              {
                backgroundColor:
                  data.status === 'Due Date Passed'
                    ? COLORS.tomato
                    : data.status === 'Pending Fine'
                    ? COLORS.waterBlue
                    : COLORS.darkBlue,
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
            <Text style={styles.leaveTxt}>Amount</Text>
            <Text style={styles.leaveTxt}>{data.amount}</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Date</Text>
            <Text style={styles.leaveTxt}>{data.date}</Text>
          </View>
          <View style={styles.showLastAttendance}>
            <Text style={styles.leaveTxt}>Due Date</Text>
            <Text style={styles.leaveTxt}>{data.dueDate}</Text>
          </View>
          {/* <View
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
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const FineHistory = () => {
  // States
  const comboxBoxObjects = [
    'Last 7 Fine',
    'Pending Fine',
    'Submitted Fine',
    'Due Date Passed',
    'All Fine',
  ];
  const getDataByStatus = () => {
    return dataFine.filter(el => el.status === application);
  };
  const getDataOfSevenDays = () => {
    return dataFine.slice(0, dataFine.length >= 8 ? 7 : dataFine.length);
  };
  let [application, setApplication] = useState('Last 7 Fine');
  let [select, setSelect] = useState(2);
  let [fineData, setFineData] = useState(getDataOfSevenDays());
  // filter data

  // check if the application object contain value of a combo box
  // like pending submiited or due date passed if yes call the methods according
  // Condition
  useEffect(() => {
    if (
      application === comboxBoxObjects[1] ||
      application === comboxBoxObjects[2] ||
      application === comboxBoxObjects[3]
    ) {
      setFineData(getDataByStatus());
      // console.log(fineData);
    }
    if (application === comboxBoxObjects[4]) {
      setFineData(dataFine);
      // console.log(fineData);
    }
    if (application === comboxBoxObjects[0]) {
      setFineData(getDataOfSevenDays());
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
        <TopInformationBar menu={'Fine History'} />
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
            {fineData.map((el, key) => (
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

export default FineHistory;

import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons} from '../constants';
import TopInformationBar from './compnents/TopInformationBar/_topInformationBar';
import SchedualScreen from './compnents/schedual/screens';

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const HomeWrok = () => {
  // top message
  const screen = message => {
    return <Text>{message}</Text>;
  };

  // render date
  const renderItem = ({item}) => <Item title={item.date.substring(8, 10)} />;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        {/* top heading and notfcation button */}
        <TopInformationBar menu={'Home Work'} />
        {/* Schedual InPage Navigation */}

        {/* Body */}
        <View style={{flex: 1}}>
          {/* Homw Work */}
          <SchedualScreen menu={'Screen2'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  schedual_btn__containor: {},
  schedual_inpage__btn: {},
});

export default HomeWrok;

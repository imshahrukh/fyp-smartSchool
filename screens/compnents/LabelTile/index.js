import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from './../../../constants';

const LabelTile = ({title}) => {
  return (
    <View style={styles.labelTile}>
      <Text style={styles.labelTileText}>{title}</Text>
      <View style={styles.labelTileLine}></View>
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
});
export default LabelTile;

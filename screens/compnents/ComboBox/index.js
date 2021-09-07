/* eslint-disable react-native/no-inline-styles */
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from './../../../constants';

const ComboBox = ({application, setApplication}) => {
  return (
    <View
      style={[
        {
          color: COLORS.darkBlue,
          borderColor: 'black',
          borderWidth: 1,
        },
        // styles.cardShadow,
      ]}>
      <Picker
        style={[
          {
            color: COLORS.darkBlue,
          },
          styles.shadow,
        ]}
        selectedValue={application}
        onValueChange={(itemValue, itemIndex) => setApplication(itemValue)}>
        <Picker.Item
          style={{
            color: COLORS.darkBlue,
          }}
          label="Leave Applicaiton"
          value="Leave Application"
        />
        <Picker.Item
          label="Sick Leave Application"
          value="Sick Leave Application"
        />
      </Picker>
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
  cardShadow: {
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default ComboBox;

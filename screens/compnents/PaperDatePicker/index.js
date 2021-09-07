/* eslint-disable react-native/no-inline-styles */
import {DatePickerModal} from 'react-native-paper-dates';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from './../../../constants';

const ReactDatePicker = ({visible, setVisible, setDates, buttonText}) => {
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onChange = React.useCallback(({date}) => {
    setVisible(false);
    console.log({date});
    setDates(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const date = new Date();

  return (
    <View>
      <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        date={date}
        onConfirm={onChange}
        saveLabel="Save"
        label="Select date"
        animationType="slide"
        locale={'en'}
      />
      <TouchableOpacity
        onPress={() => setVisible(true)}
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
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showAttendanceText: {
    color: COLORS.white,
    ...FONTS.h3,
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
export default ReactDatePicker;

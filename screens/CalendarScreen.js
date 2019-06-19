import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendar';

export default function CalendarScreen() {
  const [selected, onDayPress] = useState('');

  return <View style={styles.container} />;
}

CalendarScreen.navigationOptions = {
  title: 'Calendar'
};

function handleDayPress(onDayPress, day) {
  onDayPress(day);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

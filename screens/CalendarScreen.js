import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function CalendarScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Calendar</Text>
    </ScrollView>
  );
}

CalendarScreen.navigationOptions = {
  title: 'Calendar'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

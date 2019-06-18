import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ScrollView style={styles.container} />;
}

SettingsScreen.navigationOptions = {
  title: 'Settings'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

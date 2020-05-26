import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is the Empty route</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    fontSize: 14
  }
});
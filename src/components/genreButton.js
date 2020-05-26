import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export const GenreButton = ({ children, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('Home', { genre: children })}
    >
      <Text style={styles.content}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  content: {
    fontSize: 14,
    color: 'black',
  }
});
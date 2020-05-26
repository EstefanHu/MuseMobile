import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export const GenreButton = ({ children, navigation }) => {
  return (
    <TouchableOpacity
      onPress={
        () =>
          navigation.navigate('Home', { genre: children })
      }
    >
      <View style={styles.container}>
        <Text style={styles.content}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 14
  }
});
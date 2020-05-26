import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export const GenreButton = ({ children, navigation }) => {
  return (
    <View
      key={children}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home', { genre: children })}
      >
        <Text style={styles.content}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
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
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  button: {

  },
  content: {
    fontSize: 15
  }
});
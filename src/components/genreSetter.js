import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { GenreButton } from './genreButton';

export const GenreSetter = ({ navigation }) => {
  const genres = [
    'All',
    'Fiction',
    'Poetry',
    'Non-Fiction',
    'Speculative',
    'YA',
    'Religion',
    'Sci-Fi',
    'Fantasy',
    'Essay',
  ]

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        {genres.map(item => (
          <GenreButton
            key={item}
            navigation={navigation}
          >
            {item}
          </GenreButton>
        ))}
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 55,
    paddingBottom: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  scroll: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
  }
});
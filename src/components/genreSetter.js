import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

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
      <AntDesign
        name={'left'}
        size={20}
        color='black'
      />
      <ScrollView
        horizontal={true}
        style={styles.scroll}
      >
        {genres.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Home', { genre: item })}
          >
            <Text style={styles.content}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <AntDesign
        name={'right'}
        size={20}
        color='black'
      />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    paddingTop: 55,
    paddingBottom: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  scroll: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  content: {
    fontSize: 20
  }
});
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export const Pitch = ({ genre, author, authorId, credibility, title, description, navigation }) => {
  return (
    <View style={styles.pitch}>
      <View style={styles.header}>
        <Text>{genre} by {author}</Text>
        <Text>{credibility}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        style={styles.more}
        title='More'
        onPress={() => {
          navigation.navigate('Story', { genre, author, authorId, credibility, title, description })
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pitch: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20
  }
});
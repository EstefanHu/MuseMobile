import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export const Pitch = ({ story, navigation }) => {
  return (
    <View style={styles.pitch}>
      <View style={styles.header}>
        <Text>{story.genre} by {story.author}</Text>
        <Text>{story.credibility}</Text>
      </View>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.description}>{story.description}</Text>
      <Button
        style={styles.more}
        title='More'
        onPress={() => {
          navigation.navigate('Story', { story })
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
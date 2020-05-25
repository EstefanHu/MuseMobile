import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { LibraryContext } from '../providers/libraryProvider';
import { LibraryToggler } from '../components/libraryToggler.js';

export const Story = ({ route, navigation }) => {
  const { library } = useContext(LibraryContext);

  useEffect(() => {
    console.log(library);
  })

  return (
    <View>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.description}>{route.params.description}</Text>
      <Text style={styles.genre}>Genre: {route.params.genre}</Text>
      <Text
        style={styles.author}
        onPress={() => console.log('hello')} // TODO: Convert to navigation to user profile
      >Author: {route.params.author}</Text>
      <Text style={styles.credibility}>Credibility: {route.params.credibility}</Text>
      <LibraryToggler />
      <Button
        style={styles.engage}
        title='Begin Story'
        onPress={() =>
          navigation.navigate('Path', {
            screen: 'Launch'
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
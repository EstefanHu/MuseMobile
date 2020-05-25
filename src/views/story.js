import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { LibraryContext } from '../providers/libraryProvider';

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

      <Button
        style={styles.save}
        title='Save to Library'
        onPress={() => {
          fetch('http://192.168.1.10:4000/mobile/test')
            .then(res => res.json())
            .then(console.log)
            .catch(console.error)
        }}
      />
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
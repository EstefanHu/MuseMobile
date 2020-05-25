import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Switch,
  Dimensions,
} from 'react-native';
import { LibraryContext } from '../providers/libraryProvider';

export const Story = ({ route, navigation }) => {
  const { library } = useContext(LibraryContext);
  const [isSaved, setIsSaved] = useState(null); //TODO: Correct initial state

  useEffect(() => {
    let fromRoute = false;
    library.forEach(item => {
      if (item._id === route.params.id) fromRoute = true;
    });

    setIsSaved(fromRoute);
  }, []);

  const UpdateLibrary = () => {
    let uri = 'http://192.168.1.10:4000/mobile/addToLibrary';
    if (isSaved) uri = 'http://192.168.1.10:4000/mobile/removeFromLibrary';
    fetch(uri, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
    setIsSaved(isSaved => !isSaved)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.title}>{route.params.title}</Text>
        <Text style={styles.description}>{route.params.description}</Text>
        <Text
          style={styles.author}
          onPress={() => console.log(route.params.authorId)} // TODO: Convert to navigation to user profile
        >Author: {route.params.author}</Text>
        <Text style={styles.genre}>Genre: {route.params.genre}</Text>
        <Text style={styles.credibility}>Credibility: {route.params.credibility}</Text>
        <View style={styles.library}>
          <Text style={styles.libraryTag}>Saved to Library</Text>
          <Switch
            trackColor={{ false: "#767577", true: "rgb(255,0,0)" }}
            thumbColor={'white'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => UpdateLibrary()}
            value={isSaved} />
        </View>
      </View>
      <Button
        style={styles.engage}
        title='Begin Story'
        onPress={() =>
          navigation.navigate('Path', {
            screen: 'Launch'
          })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  information: {
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35
  },
  description: {
    fontSize: 20,
  },
  author: {
    fontSize: 20
  },
  genre: {
    fontSize: 20
  },
  credibility: {
    fontSize: 20
  },
  library: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  libraryTag: {
    fontSize: 20
  }
});
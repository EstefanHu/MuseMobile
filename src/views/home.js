import React from 'react';
import {
  Button,
  FlatList
} from 'react-native';
import { Center } from '../components/center.js';
import faker from 'faker';

export const Home = ({ navigation }) => {
  return (
    <Center>
      <FlatList
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate('Story', {
                  title: item
                });
              }}
            />
          )
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.lorem.words())}
      />
    </Center>
  );
};
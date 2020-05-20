import React from 'react';
import {
  Text,
  Button,
  FlatList
} from 'react-native';
import { Center } from '../components/center.js';
import faker from 'faker';

export const Home = () => {
  return (
    <Center>
      <FlatList
      style={{width: '100%'}}
        renderItem={({ item }) => {
          return <Button title={item} onPress={() => { }} />
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
};
import React from 'react';
import {
  Button,
  FlatList
} from 'react-native';
import { Center } from '../components/center.js';
import { Pitch } from '../components/pitch.js';

import faker from 'faker';

export const Home = ({ navigation }) => {
  return (
    <Center>
      <FlatList
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return (
            <Pitch
              genre={'Fiction'}
              author={'Me'}
              credibility={0}
              title={item}
              description={item}
            />
          )
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.lorem.words())}
      />
    </Center>
  );
};
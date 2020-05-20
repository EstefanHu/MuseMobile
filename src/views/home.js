import React from 'react';
import {
  Button,
  FlatList
} from 'react-native';
import { Center } from '../components/center.js';
import { Pitch } from '../components/pitch.js';

import faker from 'faker';

export const Home = () => {
  return (
    <Center>
      <FlatList
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return (
            <Pitch
              genre={item[0]}
              author={item[1]}
              credibility={item[2]}
              title={item[3]}
              description={item[4]}
            />
          )
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50),
          () => [
            faker.lorem.word(),
            faker.name.firstName(),
            faker.random.number(),
            faker.lorem.words(),
            faker.lorem.sentence(),
          ]
        )}
      />
    </Center>
  );
};
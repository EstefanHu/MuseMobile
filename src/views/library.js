import React from 'react';
import {
  FlatList
} from 'react-native';
import { Pitch } from '../components/pitch';

import faker from 'faker';

export const Library = ({ navigation }) => {
  return (
    <FlatList
      style={{ width: '100%', height: '100%' }}
      renderItem={({ item }) => {
        return (
          <Pitch
            genre={item[0]}
            author={item[1]}
            credibility={item[2]}
            title={item[3]}
            description={item[4]}
            navigation={navigation}
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
  );
};
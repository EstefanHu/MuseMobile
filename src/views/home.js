import React, { useContext } from 'react';
import {
  FlatList,
} from 'react-native';
import { Pitch } from '../components/pitch.js';
import { GenreContext } from '../contex';

import faker from 'faker';

export const Home = ({ navigation }) => {
  const { genre } = useContext(GenreContext);

  return (
    <FlatList
      style={{ width: '100%', height: '100%' }}
      renderItem={({ item }) => {
        return item.genre === genre || genre == 'All' ? (
          <Pitch
            genre={item[0]}
            author={item[1]}
            credibility={item[2]}
            title={item[3]}
            description={item[4]}
            navigation={navigation}
          />
        ) : null
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
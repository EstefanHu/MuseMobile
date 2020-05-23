import React, { useContext } from 'react';
import {
  FlatList,
} from 'react-native';
import { Pitch } from '../components/pitch.js';
import { GenreContext } from '../providers/genreProvider.js';

import faker from 'faker';
import { FeedContext } from '../providers/feedProvider.js';

export const Home = ({ navigation }) => {
  const { genre } = useContext(GenreContext);
  const { feed } = useContext(FeedContext);

  return (
    <FlatList
      style={{ width: '100%', height: '100%' }}
      renderItem={({ item }) => {
        return item.genre === genre || genre == 'All' ? (
          <Pitch
            genre={item.genre}
            author={item.author}
            credibility={item.credibility}
            title={item.title}
            description={item.description}
            navigation={navigation}
          />
        ) : null
      }}
      keyExtractor={(product, idx) => product + idx}
      data={feed}
    />
  );
};
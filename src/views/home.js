import React, { useContext, useEffect } from 'react';
import {
  FlatList,
} from 'react-native';
import { Pitch } from '../components/pitch.js';

import { FeedContext } from '../providers/feedProvider.js';

export const Home = ({ route, navigation }) => {
  // const { genre } = useContext(GenreContext);
  const { feed } = useContext(FeedContext);

  useEffect(() => {
    console.log(route.params.genre)
  }, [route.params?.genre])

  return (
    <FlatList
      style={{ width: '100%', height: '100%' }}
      renderItem={({ item }) => {
        return item.genre === route.params.genre || route.params.genre == 'All' ? (
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
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Pitch } from '../components/pitch.js';

import { FeedContext } from '../providers/feedProvider.js';

export const Home = ({ route, navigation }) => {
  const { feed } = useContext(FeedContext);

  return (
    <FlatList
      style={{ width: '100%', height: '100%' }}
      renderItem={({ item }) => {
        return item.genre === route.params.genre || route.params.genre == 'All' ? (
          <Pitch
            story={item}
            navigation={navigation}
          />
        ) : null
      }}
      keyExtractor={(product, idx) => product + idx}
      data={feed}
    />
  );
};
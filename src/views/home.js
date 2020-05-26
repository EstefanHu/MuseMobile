import React, { useState, useContext } from 'react';
import {
  FlatList,
  RefreshControl,
} from 'react-native';
import { Pitch } from '../components/pitch.js';

import { FeedContext } from '../providers/feedProvider.js';
import { GenreSetter } from '../components/genreSetter';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export const Home = ({ route, navigation }) => {
  const { feed, refreshFeed } = useContext(FeedContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    refreshFeed(() => setRefreshing(false));
  }

  return (
    <>
      <GenreSetter navigation={navigation} />
      <FlatList
        style={{ width: '100%', height: '100%' }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => {
          return item.genre === route.params.genre
            || route.params.genre == 'All' ?
            <Pitch
              story={item}
              navigation={navigation}
            /> : null
        }}
        keyExtractor={(product, idx) => product + idx}
        data={feed}
      />
    </>
  );
};
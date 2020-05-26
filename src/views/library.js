import React, { useContext } from 'react';
import {
  FlatList
} from 'react-native';
import { Pitch } from '../components/pitch';

import { LibraryContext } from '../providers/libraryProvider';

export const Library = ({ navigation }) => {
  const { library } = useContext(LibraryContext);

  return (
    <FlatList
      style={{ width: '100%', height: '100%' }}
      renderItem={({ item }) => {
        return (
          <Pitch
            story={item}
            navigation={navigation}
          />
        )
      }}
      keyExtractor={(product, idx) => product + idx}
      data={library}
    />
  );
};
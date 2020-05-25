import React, { useState, useEffect } from 'react';
import {
  View,
  Text
} from 'react-native';

export const Launch = ({ route, navigation }) => {
  const [hasStory, setHasStory] = useState();

  useEffect(() => {
    if (route.params !== null) return setHasStory(true);
    setHasStory(false);
    console.log(route.params);
  }, [route.params?.story]);

  return hasStory ? (
    <View>
      <Text>There is!</Text>
    </View>
  ) : (
    <View>
      <Text>Hello From Launch</Text>
    </View>
  )
};

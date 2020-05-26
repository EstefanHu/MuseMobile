import React, { useContext } from 'react';
import {
  View,
  Text
} from 'react-native';
import { CurrentContext } from '../providers/currentProvider.js';

export const Launch = ({ route, navigation }) => {
  const { current } = useContext(CurrentContext);

  return current ?
    <View>
      <Text>There is!</Text>
    </View>
    :
    <View>
      <Text>Hello From Launch</Text>
    </View>

};

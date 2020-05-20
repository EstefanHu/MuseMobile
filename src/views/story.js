import React from 'react';
import {
  Text, Button
} from 'react-native';
import { Center } from '../components/center';

export const Story = ({ route, navigation }) => {
  return (
    <Center>
      <Text>{route.params.title}</Text>
      <Button title='' onPress={() => {}}/>
    </Center>
  )
}
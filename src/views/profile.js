import React, { useContext } from 'react';
import {
  Text,
  Button
} from 'react-native';
import { AuthContext } from '../providers/authProvider';

import { Center } from '../components/center.js';

export const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Center>
      <Button
        title='logout'
        onPress={() => logout()}
      />
      <Text>Profile</Text>
    </Center>
  );
};
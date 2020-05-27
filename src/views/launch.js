import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { LocationContext } from '../providers/locationProvider.js';
import { CurrentContext } from '../providers/currentProvider.js';

import { Map } from '../layout/map.js';
import { BottomSheet } from '../components/bottomSheet.js';

export const Launch = ({ navigation }) => {
  const { longitude, latitude } = useContext(LocationContext);
  const { current } = useContext(CurrentContext);

  return (
    <View style={styles.container}>
      <Map>

      </Map>
      {/* <BottomSheet></BottomSheet> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
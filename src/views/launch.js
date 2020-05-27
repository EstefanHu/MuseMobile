import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';

import { LocationContext } from '../providers/locationProvider.js';
import { CurrentContext } from '../providers/currentProvider.js';

import { BottomSheet } from '../components/bottomSheet.js';

export const Launch = ({ navigation }) => {
  const { longitude, latitude } = useContext(LocationContext);
  const { current } = useContext(CurrentContext);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
      </View>
      <BottomSheet></BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';

import { LocationContext } from '../providers/locationProvider.js';
import { CurrentContext } from '../providers/currentProvider.js';

export const Launch = ({ navigation }) => {
  const { longitude, latitude } = useContext(LocationContext);
  const { current } = useContext(CurrentContext);

  return (
    <View style={styles.contianer}>
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
  );
};

const styles = StyleSheet.create({
  contianer: {
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
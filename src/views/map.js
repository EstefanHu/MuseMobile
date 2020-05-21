import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

export const Map = () => {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {

    })
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
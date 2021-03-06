import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import { LocationContext } from '../providers/locationProvider';

export const Map = ({ children }) => {
  const { longitude, latitude } = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        initialRegion={{
          latitude: latitude || 47.6859,
          longitude: longitude || -122.2994,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {children}
      </MapView>
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
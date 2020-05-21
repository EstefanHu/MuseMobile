import React, { useContext } from 'react';
import { LocationContext } from '../providers/locationProvider';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export const Map = () => {
  const { longitude, latitude } = useContext(LocationContext);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
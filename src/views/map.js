import React, { useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import { LocationContext } from '../providers/locationProvider';
import { FeedContext } from '../providers/feedProvider';

export const Map = () => {
  const { longitude, latitude } = useContext(LocationContext);
  const { feed } = useContext(FeedContext);

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
      >
        {feed.map(item => (
          <Marker
            key={item._id}
            coordinate={{
              latitude: item.coordinates[1],
              longitude: item.coordinates[0]
            }}
            title={item.title}
            description={item.description}
          />
        ))}
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
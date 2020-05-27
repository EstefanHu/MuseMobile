import React, { useContext } from 'react';
import { Marker } from 'react-native-maps';

import { FeedContext } from '../providers/feedProvider';

import { Map } from '../layout/map.js';

export const MapView = () => {
  const { feed } = useContext(FeedContext);

  return (
    <Map>
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
    </Map>
  );
};
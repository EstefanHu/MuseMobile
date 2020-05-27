import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';

export const BottomSheet = ({ children }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      
      onPanResponderGrant: () => {
        pan.setOffset({
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event([null, { dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{ translateY: pan.y }],
        position: 'absolute',
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.container}>
        <View style={styles.grabber}>
        </View>
        {children}
      </View>
    </Animated.View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: Dimensions.get('window').width,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5
  },
  grabber: {
    backgroundColor: '#b8b8b8',
    width: 40,
    height: 5,
    marginTop: 10,
    borderRadius: 10,
  }
});
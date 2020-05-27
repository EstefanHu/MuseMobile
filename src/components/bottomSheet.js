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
        console.log('hello');
        pan.setOffset({ y: pan.y._value });
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
        width: '100%',
        bottom: 0,
        top: 10
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
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5
  },
  grabber: {
    backgroundColor: '#b8b8b8',
    width: 40,
    height: 5,
    marginTop: 5,
    borderRadius: 10,
  }
});
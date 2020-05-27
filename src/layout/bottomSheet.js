import React from 'react'
import {
  StyleSheet,
  Animated,
  View,
  SafeAreaView,
  Text,
  Dimensions
} from 'react-native'

import { animatedPosition, panGesture } from './pan-responder'
import styles from './styles'

export const BottomSheet = () => {
  return (
    <Animated.View style={[styles.container, { bottom: animatedPosition }]}>
      <View style={styles.gestureArea} {...panGesture.panHandlers}>
        <View style={styles.pullItem} />
      </View>

      <SafeAreaView style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.text}>Your awesome content</Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    left: 0,
    width: Dimensions.get('window').width,
    height: Math.abs(ANIMATED.HIDDEN),

    marginBottom: ANIMATED.HIDDEN - ANIMATED.VISIBLE,
    paddingBottom: Math.abs(ANIMATED.FULL_OPEN),

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,

    backgroundColor: COLORS.WHITE,

    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },

  gestureArea: {
    width: Dimensions.get('window').width,
    height: 40,

    marginTop: -10,
    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
  },
  pullItem: {
    width: 40,
    height: 5,

    borderRadius: 20,

    backgroundColor: COLORS.SECONDARY
  },

  content: {
    marginVertical: 30,
    paddingHorizontal: 10,

    height: '100%',
  }
})
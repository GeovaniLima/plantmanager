import React from "react";
import {
  StyleSheet,
  View
} from 'react-native';
import AnimatedLottieView from "lottie-react-native";

import loadAnimation from '../assets/load.json';

export function Load() {
  return(
    <View style={styles.container}>
      <AnimatedLottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  }
})
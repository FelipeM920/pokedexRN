import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import styles from './styles';

export function ProgressBar(props) {
  const { progressBarLimit, progressBarMaxValue, backgroundColor } = props;

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < progressBarMaxValue) {
      setProgress(progress + 1);
    }
  }, 70);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress])

  const width = animation.current.interpolate({
    inputRange: [0, progressBarLimit],
    outputRange: ['0%', '100%'],
  })

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor, width, borderRadius: 10 }} />
      </View>
    </View>
  );
}


import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { directions, validDirections } from './config';

export default function FadeView({ children, direction = directions.IN, duration = 1000, style }) {
  if (!validDirections.includes(direction)) {
    throw new Error(`FadeView: direction must be one of ${validDirections.join(', ')}. Got: ${direction}`);
  }

  const fadeAnimationValue = useRef(
    new Animated.Value(direction === directions.IN ? 0 : 1)
  ).current;

  useEffect(() => {
    Animated.timing(fadeAnimationValue, {
      toValue: direction === directions.IN ? 1 : 0,
      duration,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View style={[style, { opacity: fadeAnimationValue }]}>
      {children}
    </Animated.View>
  );
}

import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

const DIRECTIONS = {
  IN: 'in',
  OUT: 'out'
};

const VALID_DIRECTIONS = Object.values(DIRECTIONS);

export default function FadeView({ children, direction = DIRECTIONS.IN, duration = 1000, style }) {
  if (!VALID_DIRECTIONS.includes(direction)) {
    throw new Error(`FadeView: direction must be one of ${VALID_DIRECTIONS.join(', ')}. Got: ${direction}`);
  }

  const fadeAnimationValue = useRef(
    new Animated.Value(direction === DIRECTIONS.IN ? 0 : 1)
  ).current;

  useEffect(() => {
    Animated.timing(fadeAnimationValue, {
      toValue: direction === DIRECTIONS.IN ? 1 : 0,
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

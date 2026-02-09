import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { directions, validDirections } from './config';

export default function SlideView({ children, direction = directions.LEFT, duration = 1000, style }) {
  if (!validDirections.includes(direction)) {
    throw new Error(`SlideView: direction must be one of ${validDirections.join(', ')}. Got: ${direction}`);
  }
  let initialValue = 300;
  let transformProperty = 'translateX';

  switch(direction) {
    case directions.LEFT:
      initialValue = 300;
      transformProperty = 'translateX';
      break;
    case directions.RIGHT:
      initialValue = -300;
      transformProperty = 'translateX';
      break;
    case directions.UP:
      initialValue = 300;
      transformProperty = 'translateY';
      break;
    case directions.DOWN:
      initialValue = -300;
      transformProperty = 'translateY';
      break;
  }

  const slideAnimationValue = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    Animated.timing(slideAnimationValue, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [slideAnimationValue, duration]);

  return (
    <Animated.View style={[style, { transform: [{ [transformProperty]: slideAnimationValue }] }]}>
      {children}
    </Animated.View>
  );
}

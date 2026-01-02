import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

const DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
};

const VALID_DIRECTIONS = Object.values(DIRECTIONS);

export default function SlideView({ children, direction = DIRECTIONS.LEFT, duration = 1000, style }) {
  if (!VALID_DIRECTIONS.includes(direction)) {
    throw new Error(`SlideView: direction must be one of ${VALID_DIRECTIONS.join(', ')}. Got: ${direction}`);
  }
  let initialValue = 300;
  let transformProperty = 'translateX';

  switch(direction) {
    case DIRECTIONS.LEFT:
      initialValue = 300;
      transformProperty = 'translateX';
      break;
    case DIRECTIONS.RIGHT:
      initialValue = -300;
      transformProperty = 'translateX';
      break;
    case DIRECTIONS.UP:
      initialValue = 300;
      transformProperty = 'translateY';
      break;
    case DIRECTIONS.DOWN:
      initialValue = -300;
      transformProperty = 'translateY';
      break;
  }

  const slideAnimationValue = useRef(new Animated.Value(initialValue)).current;

  const slideIn = () => {
    Animated.timing(slideAnimationValue, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn();
  }, []);

  return (
    <Animated.View style={[style, { transform: [{ [transformProperty]: slideAnimationValue }] }]}>
      {children}
    </Animated.View>
  );
}

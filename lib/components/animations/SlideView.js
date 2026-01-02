import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

const DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
};

export default function SlideView({ children, direction = DIRECTIONS.LEFT, duration = 1000 }) {
  let initialValue = 300;
  switch(direction) {
    case DIRECTIONS.LEFT:
      initialValue = 300;
      break;
    case DIRECTIONS.RIGHT:
      initialValue = -300;
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
    <Animated.View style={{ transform: [{ translateX: slideAnimationValue }] }}>
      {children}
    </Animated.View>
  );
}

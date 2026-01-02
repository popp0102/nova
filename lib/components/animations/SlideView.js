import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export default function SlideView({ children, duration = 1000 }) {
  const slideAnimationValue = useRef(new Animated.Value(300)).current;

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

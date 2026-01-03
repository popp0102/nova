import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default function ShakeView({
  shake,
  children,
  style,
  duration = 50,
  distance = 10,
  intensity = 4
}) {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (shake) {
      const shakeSequence = [];

      // Create alternating shake animations based on intensity
      for (let i = 0; i < intensity; i++) {
        const direction = i % 2 === 0 ? distance : -distance;
        shakeSequence.push(
          Animated.timing(shakeAnim, {
            toValue: direction,
            duration,
            useNativeDriver: true
          })
        );
      }

      // Return to center
      shakeSequence.push(
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration,
          useNativeDriver: true
        })
      );

      Animated.sequence(shakeSequence).start();
    }
  }, [shake, duration, distance, intensity]);

  return (
    <Animated.View style={[style, { transform: [{ translateX: shakeAnim }] }]}>
      {children}
    </Animated.View>
  );
}

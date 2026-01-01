import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const SIZES = {
  small: 375,   // iPhone SE and smaller
  medium: 768,  // Most phones up to small tablets
};

export function getDeviceSize(width) {
  if (width < SIZES.small) {
    return 'small';
  } else if (width < SIZES.medium) {
    return 'medium';
  } else {
    return 'large';
  }
}

export function useDeviceSize() {
  const [deviceSize, setDeviceSize] = useState(() => {
    const { width } = Dimensions.get('window');
    return getDeviceSize(width);
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDeviceSize(getDeviceSize(window.width));
    });

    return () => subscription?.remove();
  }, []);

  return deviceSize;
}


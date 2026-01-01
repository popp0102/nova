import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useDeviceSize } from '../utils/deviceSize';

const colors = {
  primary: {
    background: 'blue',
    text: 'white',
  },
  secondary: {
    background: '#CCCCCC',
    text: 'black',
  },
};

const responsiveSizes = {
  small: {
    fontSize: 10,
    padding: 6,
  },
  medium: {
    fontSize: 14,
    padding: 8,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
};

export default function Button({ type = 'primary', style, onPress, children }) {
  const buttonColors = colors[type];
  const deviceSize = useDeviceSize();
  const sizes = responsiveSizes[deviceSize];

  return (
    <View style={[style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: buttonColors.background,
            padding: sizes.padding,
          },
          pressed && styles.pressed,
        ]}
      >
        <Text
          style={[styles.text, { color: buttonColors.text, fontSize: sizes.fontSize }]}
          numberOfLines={1}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  text: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

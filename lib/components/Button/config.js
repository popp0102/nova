import { StyleSheet } from 'react-native';

export const colors = {
  primary: {
    background: 'blue',
    text: 'white',
  },
  secondary: {
    background: '#CCCCCC',
    text: 'black',
  },
  destructive: {
    background: '#FF3B30',
    text: 'white',
  },
};

export const sizes = {
  tiny: {
    fontSize: 12,
    padding: 6,
  },
  small: {
    fontSize: 14,
    padding: 8,
  },
  medium: {
    fontSize: 16,
    padding: 12,
  },
  large: {
    fontSize: 20,
    padding: 16,
  },
  xlarge: {
    fontSize: 24,
    padding: 20,
  },
  xxlarge: {
    fontSize: 28,
    padding: 24,
  },
};

export const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  verticalContent: {
    flexDirection: 'column',
    gap: 4,
  },
  text: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

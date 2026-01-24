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
    fontWeight: '400',
  },
  small: {
    fontSize: 14,
    padding: 8,
    fontWeight: '500',
  },
  medium: {
    fontSize: 18,
    padding: 12,
    fontWeight: '600',
  },
  large: {
    fontSize: 22,
    padding: 16,
    fontWeight: '700',
  },
  xlarge: {
    fontSize: 26,
    padding: 20,
    fontWeight: '800',
  },
  xxlarge: {
    fontSize: 30,
    padding: 24,
    fontWeight: '900',
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

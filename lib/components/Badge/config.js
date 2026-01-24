import { StyleSheet } from 'react-native';

export const sizes = {
  small: 12,
  medium: 14,
  large: 16,
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
    borderRadius: 24,
    alignSelf: "flex-start",
  },
  text: {
    fontWeight: '600',
  },
});

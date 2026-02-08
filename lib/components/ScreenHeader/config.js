import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: "100%",
  },
  topRow: {
    position: 'relative',
    width: "100%",
    minHeight: 48,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 48,
    justifyContent: 'center',
  },
  titleContainer: {
    width: "100%",
    paddingLeft: 48,
    paddingRight: 40,
    alignItems: 'center',
  },
  rightContent: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "flex-end",
    justifyContent: 'center',
  },
});

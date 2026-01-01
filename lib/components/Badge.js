import { View, Text, StyleSheet } from 'react-native';

export default function Badge({ children, leftIcon, rightIcon, style }) {
  return (
    <View style={style}>
      <View style={styles.container}>
        {leftIcon}
        <Text style={styles.text}>{children}</Text>
        {rightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
    borderRadius: 24,
    backgroundColor: "blue",
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

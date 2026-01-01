import { View, Text, StyleSheet } from 'react-native';

export default function Badge({ children, style }) {
  return (
    <View style={style}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: "blue",
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

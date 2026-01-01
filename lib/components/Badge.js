import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Badge({ children, style }) {
  return (
    <View style={style}>
      <View style={styles.container}>
        <Ionicons name="checkmark-circle" color="white" size={20} />
        <Text style={styles.text}>{children}</Text>
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

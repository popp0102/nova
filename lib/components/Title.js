import { Text, StyleSheet } from "react-native";

const SIZES = {
  small: 20,
  medium: 24,
  large: 28,
};

export default function Title({ children, color = 'black', size = 'medium' }) {
  const fontSize = SIZES[size] || SIZES.medium;

  return (
    <Text style={[styles.title, { color, fontSize }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

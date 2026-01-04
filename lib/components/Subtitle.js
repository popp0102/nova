import { Text, StyleSheet } from "react-native";

const SIZES = {
  small: 12,
  medium: 14,
  large: 16,
};

export default function Subtitle({ children, color = '#777', size = 'medium' }) {
  const fontSize = SIZES[size] || SIZES.medium;

  return (
    <Text style={[styles.subtitle, { color, fontSize }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontStyle: 'italic',
  },
});

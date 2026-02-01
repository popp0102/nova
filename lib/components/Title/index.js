import { Text } from "react-native";
import { sizes, styles } from './config';

export default function Title({ children, color = 'black', size = 'medium', fontFamily }) {
  const fontSize = sizes[size] || sizes.medium;

  return (
    <Text style={[styles.title, { color, fontSize, fontFamily }]}>
      {children}
    </Text>
  );
}

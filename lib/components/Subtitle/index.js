import { Text } from "react-native";
import { sizes, styles } from './config';

export default function Subtitle({ children, color = '#777', size = 'medium' }) {
  const fontSize = sizes[size] || sizes.medium;

  return (
    <Text style={[styles.subtitle, { color, fontSize }]}>
      {children}
    </Text>
  );
}

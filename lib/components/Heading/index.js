import { Text } from "react-native";
import { sizes, styles } from './config';

export default function Heading({ children, color = 'black', size = 'h4', fontFamily }) {
  const fontSize = sizes[size] || sizes.h4;

  return (
    <Text style={[styles.heading, { color, fontSize, fontFamily }]}>
      {children}
    </Text>
  );
}

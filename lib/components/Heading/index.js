import { Text } from "react-native";
import { sizes, styles } from './config';

export default function Heading({ children, color = 'black', size = 'h4', fontFamily, textAlign = 'left' }) {
  const fontSize = sizes[size] || sizes.h4;
  const fontWeight = fontFamily ? 'normal' : 'bold';

  const dynamicStyle = { color, fontSize, fontWeight, textAlign };
  if (fontFamily) {
    dynamicStyle.fontFamily = fontFamily;
  }

  return (
    <Text style={[styles.heading, dynamicStyle]}>
      {children}
    </Text>
  );
}

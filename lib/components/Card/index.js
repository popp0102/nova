import { View, Pressable } from "react-native";
import { styles } from './config';

export default function Card({ children, onPress, style }) {
  const cardContent = (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }) => [pressed && styles.cardPressed]}
        onPress={onPress}
      >
        {cardContent}
      </Pressable>
    );
  }

  return cardContent;
}

import { View, Pressable, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  cardPressed: {
    opacity: 0.5,
  },
});

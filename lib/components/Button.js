import { View, Text, Pressable, StyleSheet } from 'react-native';

const colors = {
  primary: {
    background: 'blue',
    text: 'white',
  },
  secondary: {
    background: 'gray',
    text: 'black',
  },
};

export default function Button({ type = 'primary', style, onPress, children }) {
  const buttonColors = colors[type];

  return (
    <View style={[style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: buttonColors.background },
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.text, { color: buttonColors.text }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

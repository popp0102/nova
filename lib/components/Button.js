import { View, Text, Pressable, StyleSheet } from 'react-native';

const colors = {
  primary: {
    background: 'blue',
    text: 'white',
  },
  secondary: {
    background: '#CCCCCC',
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
    padding: 8,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

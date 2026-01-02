import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Badge({
  children,
  leftIcon,
  rightIcon,
  iconSize = 20,
  color = 'white',
  backgroundColor = 'blue',
  style
}) {
  return (
    <View style={style}>
      <View style={[styles.container, { backgroundColor }]}>
        {leftIcon && <MaterialIcons name={leftIcon} size={iconSize} color={color} />}
        <Text style={[styles.text, { color }]}>{children}</Text>
        {rightIcon && <MaterialIcons name={rightIcon} size={iconSize} color={color} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
    borderRadius: 24,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 16,
  },
});

import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Badge({
  children,
  leftIcon,
  rightIcon,
  iconSize = 20,
  iconColor = 'white',
  style
}) {
  return (
    <View style={style}>
      <View style={styles.container}>
        {leftIcon && <MaterialIcons name={leftIcon} size={iconSize} color={iconColor} />}
        <Text style={styles.text}>{children}</Text>
        {rightIcon && <MaterialIcons name={rightIcon} size={iconSize} color={iconColor} />}
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
    backgroundColor: "blue",
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

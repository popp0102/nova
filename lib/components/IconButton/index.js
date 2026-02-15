import { Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './config';

export default function IconButton({ name, size = 24, color = 'black', onPress, testID }) {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <MaterialIcons name={name} size={size} color={color} />
    </Pressable>
  );
}

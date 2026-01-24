import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { sizes, styles } from './config';

export default function Badge({
  children,
  leftIcon,
  rightIcon,
  iconSize = 20,
  color = 'white',
  backgroundColor = 'blue',
  size = 'large',
  style
}) {
  const fontSize = sizes[size] || sizes.large;

  return (
    <View style={style}>
      <View style={[styles.container, { backgroundColor }]}>
        {leftIcon && <MaterialIcons name={leftIcon} size={iconSize} color={color} />}
        <Text style={[styles.text, { color, fontSize }]}>{children}</Text>
        {rightIcon && <MaterialIcons name={rightIcon} size={iconSize} color={color} />}
      </View>
    </View>
  );
}

import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, sizes, styles } from './config';

export default function Button({
  type = 'primary',
  size = 'medium',
  color,
  textColor,
  style,
  onPress,
  children,
  icon,
  iconPosition,
  iconColor,
  gradient
}) {
  const buttonColors = colors[type];
  const buttonSizes = sizes[size];
  const backgroundColor = color || buttonColors.background;
  const finalTextColor = textColor || buttonColors.text;
  const iconSize = buttonSizes.fontSize * 1.4;
  const finalIconColor = iconColor || finalTextColor;

  if (iconPosition && !['left', 'right', 'top'].includes(iconPosition)) {
    throw new Error(`Invalid iconPosition: "${iconPosition}". Must be "left", "right", or "top".`);
  }

  const isVerticalLayout = iconPosition === 'top';
  const verticalIconSize = buttonSizes.fontSize * 2.5;
  const currentIconSize = isVerticalLayout ? verticalIconSize : iconSize;

  const textElement = (
    <Text
      style={[styles.text, { color: finalTextColor, fontSize: buttonSizes.fontSize, fontWeight: buttonSizes.fontWeight }]}
      numberOfLines={1}
    >
      {children}
    </Text>
  );

  const iconElement = icon && (
    <MaterialIcons name={icon} size={currentIconSize} color={finalIconColor} />
  );

  const content = (
    <View style={[styles.buttonContent, isVerticalLayout && styles.verticalContent]}>
      {icon && (iconPosition === 'left' || iconPosition === 'top') && iconElement}
      {textElement}
      {icon && iconPosition === 'right' && iconElement}
    </View>
  );

  const backgroundStyle = gradient
    ? { overflow: 'hidden', padding: 0 }
    : { backgroundColor, padding: buttonSizes.padding };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, backgroundStyle, pressed && styles.pressed, style]}
    >
      {gradient ? (
        <LinearGradient colors={gradient} style={{ padding: buttonSizes.padding }}>
          {content}
        </LinearGradient>
      ) : content}
    </Pressable>
  );
}

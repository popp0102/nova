import { View, Text, Pressable } from 'react-native';
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
  iconColor
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

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: backgroundColor,
          padding: buttonSizes.padding,
        },
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={[styles.buttonContent, isVerticalLayout && styles.verticalContent]}>
        {icon && (iconPosition === 'left' || iconPosition === 'top') && iconElement}
        {textElement}
        {icon && iconPosition === 'right' && iconElement}
      </View>
    </Pressable>
  );
}

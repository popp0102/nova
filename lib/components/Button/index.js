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
  disabled = false
}) {
  const buttonColors = colors[type];
  const buttonSizes = sizes[size];
  const isGradient = Array.isArray(color);
  const backgroundColor = isGradient ? null : (color || buttonColors.background);
  const finalTextColor = textColor || buttonColors.text;

  const iconName = icon?.name;
  const iconPosition = icon?.position;
  const iconColor = icon?.color || finalTextColor;

  if (iconPosition && !['left', 'right', 'top'].includes(iconPosition)) {
    throw new Error(`Invalid icon.position: "${iconPosition}". Must be "left", "right", or "top".`);
  }

  const isVerticalLayout = iconPosition === 'top';
  const baseIconSize = buttonSizes.fontSize * 1.4;
  const verticalIconSize = buttonSizes.fontSize * 2.5;
  const iconSize = isVerticalLayout ? verticalIconSize : baseIconSize;

  const textElement = (
    <Text
      style={[styles.text, { color: finalTextColor, fontSize: buttonSizes.fontSize, fontWeight: buttonSizes.fontWeight }]}
      numberOfLines={1}
    >
      {children}
    </Text>
  );

  const iconElement = iconName && (
    <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
  );

  const content = (
    <View style={[styles.buttonContent, isVerticalLayout && styles.verticalContent]}>
      {iconName && (iconPosition === 'left' || iconPosition === 'top') && iconElement}
      {textElement}
      {iconName && iconPosition === 'right' && iconElement}
    </View>
  );

  const backgroundStyle = isGradient
    ? { overflow: 'hidden', padding: 0 }
    : { backgroundColor, padding: buttonSizes.padding };

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        backgroundStyle,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style
      ]}
    >
      {isGradient ? (
        <LinearGradient colors={color} style={{ padding: buttonSizes.padding }}>
          {content}
        </LinearGradient>
      ) : content}
    </Pressable>
  );
}

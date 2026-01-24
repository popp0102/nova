import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const colors = {
  primary: {
    background: 'blue',
    text: 'white',
  },
  secondary: {
    background: '#CCCCCC',
    text: 'black',
  },
  destructive: {
    background: '#FF3B30',
    text: 'white',
  },
};

const sizes = {
  tiny: {
    fontSize: 12,
    padding: 6,
  },
  small: {
    fontSize: 14,
    padding: 8,
  },
  medium: {
    fontSize: 16,
    padding: 12,
  },
  large: {
    fontSize: 20,
    padding: 16,
  },
  xlarge: {
    fontSize: 24,
    padding: 20,
  },
  xxlarge: {
    fontSize: 28,
    padding: 24,
  },
};

export default function Button({
  type = 'primary',
  size = 'medium',
  style,
  onPress,
  children,
  icon,
  iconPosition,
  iconColor
}) {
  const buttonColors = colors[type];
  const buttonSizes = sizes[size];
  const iconSize = buttonSizes.fontSize * 1.4;
  const finalIconColor = iconColor || buttonColors.text;

  if (iconPosition && !['left', 'right', 'top'].includes(iconPosition)) {
    throw new Error(`Invalid iconPosition: "${iconPosition}". Must be "left", "right", or "top".`);
  }

  const isVerticalLayout = iconPosition === 'top';
  const verticalIconSize = buttonSizes.fontSize * 2.5;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: buttonColors.background,
          padding: buttonSizes.padding,
        },
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={[
        styles.buttonContent,
        isVerticalLayout && styles.verticalContent
      ]}>
        {isVerticalLayout ? (
          <>
            {icon && (
              <MaterialIcons name={icon} size={verticalIconSize} color={finalIconColor} />
            )}
            <Text
              style={[styles.text, { color: buttonColors.text, fontSize: buttonSizes.fontSize }]}
              numberOfLines={1}
            >
              {children}
            </Text>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <MaterialIcons name={icon} size={iconSize} color={finalIconColor} />
            )}
            <Text
              style={[styles.text, { color: buttonColors.text, fontSize: buttonSizes.fontSize }]}
              numberOfLines={1}
            >
              {children}
            </Text>
            {icon && iconPosition === 'right' && (
              <MaterialIcons name={icon} size={iconSize} color={finalIconColor} />
            )}
          </>
        )}
      </View>
    </Pressable>
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  verticalContent: {
    flexDirection: 'column',
    gap: 4,
  },
  text: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

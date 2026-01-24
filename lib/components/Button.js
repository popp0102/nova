import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDeviceSize } from '../utils/deviceSize';

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

const responsiveSizes = {
  small: {
    fontSize: 10,
    padding: 6,
  },
  medium: {
    fontSize: 14,
    padding: 8,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
};

export default function Button({
  type = 'primary',
  style,
  onPress,
  children,
  icon,
  iconPosition,
  iconColor
}) {
  const buttonColors = colors[type];
  const deviceSize = useDeviceSize();
  const sizes = responsiveSizes[deviceSize];
  const iconSize = sizes.fontSize * 1.4;
  const finalIconColor = iconColor || buttonColors.text;

  if (iconPosition && !['left', 'right', 'top'].includes(iconPosition)) {
    throw new Error(`Invalid iconPosition: "${iconPosition}". Must be "left", "right", or "top".`);
  }

  const isVerticalLayout = iconPosition === 'top';
  const verticalIconSize = sizes.fontSize * 2.5;

  return (
    <View style={[style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: buttonColors.background,
            padding: sizes.padding,
          },
          pressed && styles.pressed,
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
                style={[styles.text, { color: buttonColors.text, fontSize: sizes.fontSize }]}
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
                style={[styles.text, { color: buttonColors.text, fontSize: sizes.fontSize }]}
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

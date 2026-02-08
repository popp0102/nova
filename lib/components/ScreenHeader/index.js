import { View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Heading from '../Heading';
import { useDeviceSize } from '../../utils/deviceSize';
import { styles } from './config';

export default function ScreenHeader({
  title,
  leftIcon,
  rightIcon,
  titleFontFamily,
  titleColor = "#4A2C0A"
}) {
  const deviceSize = useDeviceSize();
  const titleSize = deviceSize === 'small' ? 'h4' : 'h3';

  const leftIconColor = leftIcon?.color || "#4A2C0A";
  const leftIconName = leftIcon?.name || "arrow-back";
  const onLeftIconPress = leftIcon?.onSelect;

  const rightIconColor = rightIcon?.color || "#4A2C0A";
  const rightIconName = rightIcon?.name;
  const onRightIconPress = rightIcon?.onSelect;

  const renderLeftIcon = () => {
    if (!leftIcon) return null;

    const icon = <MaterialIcons name={leftIconName} size={32} color={leftIconColor} />;

    if (onLeftIconPress) {
      return (
        <Pressable onPress={onLeftIconPress} style={styles.backButton} testID="screen-header-left-icon">
          {icon}
        </Pressable>
      );
    }

    return (
      <View style={styles.backButton} testID="screen-header-left-icon">
        {icon}
      </View>
    );
  };

  const renderRightIcon = () => {
    if (!rightIconName) return null;

    const icon = <MaterialIcons name={rightIconName} size={28} color={rightIconColor} />;

    if (onRightIconPress) {
      return (
        <Pressable onPress={onRightIconPress} style={styles.rightContent} testID="screen-header-right-icon">
          {icon}
        </Pressable>
      );
    }

    return (
      <View style={styles.rightContent} testID="screen-header-right-icon">
        {icon}
      </View>
    );
  };

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        {renderLeftIcon()}
        <View style={styles.titleContainer}>
          <Heading
            size={titleSize}
            fontFamily={titleFontFamily}
            color={titleColor}
            numberOfLines={1}
          >
            {title}
          </Heading>
        </View>
        {renderRightIcon()}
      </View>
    </View>
  );
}

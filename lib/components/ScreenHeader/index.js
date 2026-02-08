import { View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Heading from '../Heading';
import { useDeviceSize } from '../../utils/deviceSize';
import { styles } from './config';

export default function ScreenHeader({
  title,
  onBack,
  rightContent,
  titleFontFamily,
  titleColor = "#4A2C0A",
  backIconColor = "#4A2C0A"
}) {
  const deviceSize = useDeviceSize();
  const titleSize = deviceSize === 'small' ? 'h4' : 'h3';

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        {onBack && (
          <Pressable onPress={onBack} style={styles.backButton} testID="screen-header-back-button">
            <MaterialIcons name="arrow-back" size={32} color={backIconColor} />
          </Pressable>
        )}
        <View style={styles.titleContainer}>
          <Heading size={titleSize} fontFamily={titleFontFamily} color={titleColor}>{title}</Heading>
        </View>
        {rightContent && (
          <View style={styles.rightContent}>
            {rightContent}
          </View>
        )}
      </View>
    </View>
  );
}

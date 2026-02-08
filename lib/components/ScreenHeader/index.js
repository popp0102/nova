import { View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Heading from '../Heading';
import { styles } from './config';

export default function ScreenHeader({
  title,
  subtitle,
  onBack,
  rightContent,
  titleFontFamily,
  titleColor = "#4A2C0A",
  subtitleColor = "#2C1810",
  backIconColor = "#4A2C0A"
}) {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        {onBack ? (
          <Pressable onPress={onBack} style={styles.backButton} testID="screen-header-back-button">
            <MaterialIcons name="arrow-back" size={32} color={backIconColor} />
          </Pressable>
        ) : (
          <View style={styles.backButton} />
        )}
        <View style={styles.titleContainer}>
          <Heading size="h2" fontFamily={titleFontFamily} color={titleColor}>{title}</Heading>
        </View>
        {rightContent ? (
          <View style={styles.rightContent}>
            {rightContent}
          </View>
        ) : (
          <View style={styles.rightContent} />
        )}
      </View>
      {subtitle && (
        <View style={styles.subtitleRow}>
          <Heading size="h5" color={subtitleColor}>{subtitle}</Heading>
        </View>
      )}
    </View>
  );
}

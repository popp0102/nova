import { StyleSheet, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen({ style, children, gradientColors, backgroundImage }) {
  const content = (
    <SafeAreaView style={[styles.safeArea, style]} edges={['top', 'left', 'right']}>
      {children}
    </SafeAreaView>
  );

  const withBackground = backgroundImage ? (
    <ImageBackground
      source={backgroundImage.source}
      style={styles.backgroundImage}
      imageStyle={{ opacity: backgroundImage.opacity ?? 0.1 }}
      resizeMode="cover"
    >
      {content}
    </ImageBackground>
  ) : content;

  return gradientColors ? (
    <LinearGradient
      colors={gradientColors}
      style={styles.gradient}
    >
      {withBackground}
    </LinearGradient>
  ) : (
    <View style={styles.gradient}>
      {withBackground}
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

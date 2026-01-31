import { Text, StyleSheet, View } from "react-native";
import Screen from "../../lib/components/Screen";

const backgroundImage = require('../../assets/background-items.png');

export default {
  title: "Components/Screen",
  component: Screen,
  parameters: {
    notes: `
# Screen Component

A flexible screen container with optional gradient and background image support.

## Props
- \`children\`: Content to render
- \`style\`: Custom styles for SafeAreaView
- \`gradientColors\`: Optional array of colors for LinearGradient (e.g., ['#8B7355', '#D4C4A8'])
- \`backgroundImage\`: Optional object with \`source\` and \`opacity\` properties
  - \`source\`: Image source (require('./image.png') or {uri: 'url'})
  - \`opacity\`: Number between 0-1 (defaults to 0.1)

## Example Usage
\`\`\`jsx
// With gradient
<Screen gradientColors={['#8B7355', '#D4C4A8']}>
  <Text>Content</Text>
</Screen>

// With background image
<Screen backgroundImage={{ source: require('./bg.png'), opacity: 0.5 }}>
  <Text>Content</Text>
</Screen>

// With both
<Screen
  gradientColors={['#8B7355', '#D4C4A8']}
  backgroundImage={{ source: require('./bg.png'), opacity: 0.3 }}
>
  <Text>Content</Text>
</Screen>
\`\`\`
    `,
  },
};

export const Default = () => (
  <Screen>
    <Text style={styles.text}>
      Default Screen (no gradient, no background image)
    </Text>
  </Screen>
);

export const WithGradient = () => (
  <Screen gradientColors={['#8B7355', '#D4C4A8', '#8B7355']}>
    <Text style={styles.text}>
      Screen with gradient colors
    </Text>
  </Screen>
);

export const WithDifferentGradient = () => (
  <Screen gradientColors={['#FF6B6B', '#4ECDC4', '#45B7D1']}>
    <Text style={styles.text}>
      Screen with custom gradient (red to blue)
    </Text>
  </Screen>
);

export const WithBackgroundImage = () => (
  <Screen backgroundImage={{ source: backgroundImage, opacity: 0.8 }}>
    <Text style={styles.text}>
      Screen with background image (opacity: 0.8, no gradient)
    </Text>
  </Screen>
);

export const WithBackgroundDefaultOpacity = () => (
  <Screen backgroundImage={{ source: backgroundImage }}>
    <Text style={styles.text}>
      Screen with background image (default opacity: 0.1)
    </Text>
  </Screen>
);

export const WithGradientAndBackground = () => (
  <Screen
    gradientColors={['#8B7355', '#D4C4A8', '#8B7355']}
    backgroundImage={{ source: backgroundImage, opacity: 0.3 }}
  >
    <Text style={styles.text}>
      Screen with both gradient and background image
    </Text>
  </Screen>
);

export const WithCustomStyle = () => (
  <Screen
    gradientColors={['#1a1a1a', '#2d2d2d']}
    style={{ padding: 40, justifyContent: 'center', alignItems: 'center' }}
  >
    <Text style={[styles.text, { color: 'white' }]}>
      Screen with custom style (centered content with padding)
    </Text>
  </Screen>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 50,
  },
});

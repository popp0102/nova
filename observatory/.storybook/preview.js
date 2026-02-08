import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';
import { View, Text } from 'react-native';

const FontLoader = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Chewy: Chewy_400Regular,
  });

  if (!fontsLoaded) {
    return <View><Text>Loading fonts...</Text></View>;
  }

  return children;
};

export const decorators = [
  (Story) => (
    <SafeAreaProvider>
      <FontLoader>
        <Story />
      </FontLoader>
    </SafeAreaProvider>
  ),
];

export const parameters = {};

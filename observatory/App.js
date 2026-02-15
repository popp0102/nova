import './.rnstorybook/storybook.requires';
import { view } from './.rnstorybook/storybook.requires';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorybookUI = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

function App() {
  return <StorybookUI />;
}

export default App;

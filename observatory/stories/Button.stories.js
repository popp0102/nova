import { View } from 'react-native';
import Button from '../../lib/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Buttons = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Button style={{ width: 200 }} type="primary" onPress={() => console.log('Primary pressed')}>
        Primary Button
      </Button>
      <Button style={{ width: 200 }} type="secondary" onPress={() => console.log('Secondary pressed')}>
        Secondary Button
      </Button>
      <Button style={{ width: 200 }} type="destructive" onPress={() => console.log('Destructive pressed')}>
        Destructive Button
      </Button>
    </View>
  ),
};

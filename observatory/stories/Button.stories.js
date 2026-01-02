import { View } from 'react-native';
import Button from '../../lib/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = {
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

export const WithIcons = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        style={{ width: 200 }}
        type="primary"
        leftIcon="add"
        onPress={() => console.log('Add pressed')}
      >
        Add Item
      </Button>
      <Button
        style={{ width: 200 }}
        type="secondary"
        rightIcon="arrow-forward"
        onPress={() => console.log('Next pressed')}
      >
        Next
      </Button>
      <Button
        style={{ width: 200 }}
        type="destructive"
        leftIcon="delete"
        onPress={() => console.log('Delete pressed')}
      >
        Delete
      </Button>
      <Button
        style={{ width: 200 }}
        type="primary"
        leftIcon="save"
        rightIcon="check"
        onPress={() => console.log('Save pressed')}
      >
        Save
      </Button>
      <Button
        style={{ width: 200 }}
        type="secondary"
        leftIcon="favorite"
        iconColor="red"
        onPress={() => console.log('Favorite pressed')}
      >
        Favorite
      </Button>
      <Button
        style={{ width: 200 }}
        type="primary"
        leftIcon="download"
        iconColor="lightgreen"
        onPress={() => console.log('Download pressed')}
      >
        Download
      </Button>
    </View>
  ),
};

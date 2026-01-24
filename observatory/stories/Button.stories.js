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

export const LeftIcons = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        style={{ width: 200 }}
        type="primary"
        icon="add"
        iconPosition="left"
        onPress={() => console.log('Add pressed')}
      >
        Add Item
      </Button>
      <Button
        style={{ width: 200 }}
        type="destructive"
        icon="delete"
        iconPosition="left"
        onPress={() => console.log('Delete pressed')}
      >
        Delete
      </Button>
      <Button
        style={{ width: 200 }}
        type="secondary"
        icon="favorite"
        iconPosition="left"
        iconColor="red"
        onPress={() => console.log('Favorite pressed')}
      >
        Favorite
      </Button>
      <Button
        style={{ width: 200 }}
        type="primary"
        icon="download"
        iconPosition="left"
        iconColor="lightgreen"
        onPress={() => console.log('Download pressed')}
      >
        Download
      </Button>
    </View>
  ),
};

export const RightIcons = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        style={{ width: 200 }}
        type="secondary"
        icon="arrow-forward"
        iconPosition="right"
        onPress={() => console.log('Next pressed')}
      >
        Next
      </Button>
      <Button
        style={{ width: 200 }}
        type="primary"
        icon="check"
        iconPosition="right"
        onPress={() => console.log('Confirm pressed')}
      >
        Confirm
      </Button>
      <Button
        style={{ width: 200 }}
        type="destructive"
        icon="close"
        iconPosition="right"
        onPress={() => console.log('Cancel pressed')}
      >
        Cancel
      </Button>
      <Button
        style={{ width: 200 }}
        type="secondary"
        icon="send"
        iconPosition="right"
        onPress={() => console.log('Send pressed')}
      >
        Send
      </Button>
    </View>
  ),
};

export const TopIcons = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Button
          style={{ width: 120, height: 120 }}
          type="secondary"
          icon="create"
          iconPosition="top"
          onPress={() => console.log('Create pressed')}
        >
          Create
        </Button>
        <Button
          style={{ width: 120, height: 120 }}
          type="secondary"
          icon="settings"
          iconPosition="top"
          onPress={() => console.log('Settings pressed')}
        >
          Settings
        </Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Button
          style={{ width: 120, height: 120 }}
          type="primary"
          icon="favorite"
          iconPosition="top"
          onPress={() => console.log('Favorite pressed')}
        >
          Favorite
        </Button>
        <Button
          style={{ width: 120, height: 120 }}
          type="destructive"
          icon="delete"
          iconPosition="top"
          onPress={() => console.log('Delete pressed')}
        >
          Delete
        </Button>
      </View>
    </View>
  ),
};

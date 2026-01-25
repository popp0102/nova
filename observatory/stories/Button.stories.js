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
      <Button style={{ width: 200 }} type="primary" color="purple" onPress={() => console.log('Custom color pressed')}>
        Custom Color
      </Button>
      <Button style={{ width: 200 }} type="primary" color="orange" textColor="darkblue" onPress={() => console.log('Custom text color pressed')}>
        Custom Text Color
      </Button>
    </View>
  ),
};

export const Gradients = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        style={{ width: 200 }}
        gradient={['#FF6B6B', '#4ECDC4']}
        onPress={() => console.log('Gradient 1 pressed')}
      >
        Sunset Teal
      </Button>
      <Button
        style={{ width: 200 }}
        gradient={['#667eea', '#764ba2']}
        onPress={() => console.log('Gradient 2 pressed')}
      >
        Purple Haze
      </Button>
      <Button
        style={{ width: 200 }}
        gradient={['#f093fb', '#f5576c']}
        onPress={() => console.log('Gradient 3 pressed')}
      >
        Pink Flame
      </Button>
      <Button
        style={{ width: 200 }}
        gradient={['#4facfe', '#00f2fe']}
        onPress={() => console.log('Gradient 4 pressed')}
      >
        Ocean Blue
      </Button>
      <Button
        style={{ width: 200 }}
        gradient={['#43e97b', '#38f9d7']}
        onPress={() => console.log('Gradient 5 pressed')}
      >
        Mint Fresh
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
        icon={{ name: 'add', position: 'left' }}
        onPress={() => console.log('Add pressed')}
      >
        Add Item
      </Button>
      <Button
        style={{ width: 200 }}
        type="destructive"
        icon={{ name: 'delete', position: 'left' }}
        onPress={() => console.log('Delete pressed')}
      >
        Delete
      </Button>
      <Button
        style={{ width: 200 }}
        type="secondary"
        icon={{ name: 'favorite', position: 'left', color: 'red' }}
        onPress={() => console.log('Favorite pressed')}
      >
        Favorite
      </Button>
      <Button
        style={{ width: 200 }}
        type="primary"
        icon={{ name: 'download', position: 'left', color: 'lightgreen' }}
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
        icon={{ name: 'arrow-forward', position: 'right' }}
        onPress={() => console.log('Next pressed')}
      >
        Next
      </Button>
      <Button
        style={{ width: 200 }}
        type="primary"
        icon={{ name: 'check', position: 'right' }}
        onPress={() => console.log('Confirm pressed')}
      >
        Confirm
      </Button>
      <Button
        style={{ width: 200 }}
        type="destructive"
        icon={{ name: 'close', position: 'right' }}
        onPress={() => console.log('Cancel pressed')}
      >
        Cancel
      </Button>
      <Button
        style={{ width: 200 }}
        type="secondary"
        icon={{ name: 'send', position: 'right' }}
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
          icon={{ name: 'create', position: 'top' }}
          onPress={() => console.log('Create pressed')}
        >
          Create
        </Button>
        <Button
          style={{ width: 120, height: 120 }}
          type="secondary"
          icon={{ name: 'settings', position: 'top' }}
          onPress={() => console.log('Settings pressed')}
        >
          Settings
        </Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Button
          style={{ width: 120, height: 120 }}
          type="primary"
          icon={{ name: 'favorite', position: 'top' }}
          onPress={() => console.log('Favorite pressed')}
        >
          Favorite
        </Button>
        <Button
          style={{ width: 120, height: 120 }}
          type="destructive"
          icon={{ name: 'delete', position: 'top' }}
          onPress={() => console.log('Delete pressed')}
        >
          Delete
        </Button>
      </View>
    </View>
  ),
};

export const Sizes = {
  render: () => (
    <View style={{ flex: 1, padding: 16, gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        size="tiny"
        type="primary"
        onPress={() => console.log('Tiny pressed')}
      >
        Tiny Button
      </Button>
      <Button
        size="small"
        type="primary"
        onPress={() => console.log('Small pressed')}
      >
        Small Button
      </Button>
      <Button
        size="medium"
        type="primary"
        onPress={() => console.log('Medium pressed')}
      >
        Medium Button
      </Button>
      <Button
        size="large"
        type="primary"
        onPress={() => console.log('Large pressed')}
      >
        Large Button
      </Button>
      <Button
        size="xlarge"
        type="primary"
        onPress={() => console.log('XLarge pressed')}
      >
        XLarge Button
      </Button>
      <Button
        size="xxlarge"
        type="primary"
        onPress={() => console.log('XXLarge pressed')}
      >
        XXLarge Button
      </Button>
    </View>
  ),
};

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
        color={['#7ED321', '#5BA318']}
        textColor="#FFFFFF"
        onPress={() => console.log('Grassland pressed')}
      >
        Grassland
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#F5A623', '#D4880B']}
        textColor="#FFFFFF"
        onPress={() => console.log('Sunset pressed')}
      >
        Sunset
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#6B7C93', '#4A5568']}
        textColor="#FFFFFF"
        onPress={() => console.log('Storm pressed')}
      >
        Storm
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#E74C3C', '#C0392B']}
        textColor="#FFFFFF"
        onPress={() => console.log('Ember pressed')}
      >
        Ember
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#3498DB', '#2980B9']}
        textColor="#FFFFFF"
        onPress={() => console.log('Ocean pressed')}
      >
        Ocean
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#BA68C8', '#6A1B9A']}
        textColor="#FFFFFF"
        onPress={() => console.log('Purple pressed')}
      >
        Mystic
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#4DD0E1', '#00838F']}
        textColor="#FFFFFF"
        onPress={() => console.log('Teal pressed')}
      >
        Lagoon
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#FF80AB', '#AD1457']}
        textColor="#FFFFFF"
        onPress={() => console.log('Pink pressed')}
      >
        Flamingo
      </Button>
      <Button
        style={{ width: 200 }}
        color={['#FFD54F', '#FF8F00']}
        textColor="#1A1A1A"
        onPress={() => console.log('Gold pressed')}
      >
        Golden
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

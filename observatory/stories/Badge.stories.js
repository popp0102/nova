import { View } from 'react-native';
import Badge from '../../lib/components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = {
  render: () => (
    <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Badge leftIcon="check-circle">
        Default Blue
      </Badge>
      <Badge rightIcon="arrow-forward" backgroundColor="green">
        Green Badge
      </Badge>
      <Badge leftIcon="star" rightIcon="close" backgroundColor="purple" color="yellow">
        Custom Colors
      </Badge>
      <Badge backgroundColor="black" color="white">
        No Icons
      </Badge>
      <Badge backgroundColor="#ff6b6b" color="#ffffff" leftIcon="favorite">
        Hex Colors
      </Badge>
    </View>
  ),
};

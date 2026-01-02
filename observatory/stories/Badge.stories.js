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
        Left Icon
      </Badge>
      <Badge rightIcon="arrow-forward">
        Right Icon
      </Badge>
      <Badge leftIcon="star" rightIcon="close">
        Both Icons
      </Badge>
      <Badge>No Icons</Badge>
    </View>
  ),
};

import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from '../../lib/components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = {
  render: () => (
    <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Badge leftIcon={<Ionicons name="checkmark-circle" size={20} color="white" />}>
        Left Icon
      </Badge>
      <Badge rightIcon={<Ionicons name="arrow-forward" size={20} color="white" />}>
        Right Icon
      </Badge>
      <Badge
        leftIcon={<Ionicons name="star" size={20} color="white" />}
        rightIcon={<Ionicons name="close" size={20} color="white" />}
      >
        Both Icons
      </Badge>
      <Badge>No Icons</Badge>
    </View>
  ),
};

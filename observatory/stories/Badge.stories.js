import { View } from 'react-native';
import Badge from '../../lib/components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = {
  render: () => (
    <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Badge>Solved</Badge>
    </View>
  ),
};

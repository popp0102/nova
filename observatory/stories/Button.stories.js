import { View } from 'react-native';
import Button from '../../lib/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    onPress: { action: 'pressed' },
  },
};

export const Primary = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
  render: (args) => <Button {...args} />,
};

export const Secondary = {
  args: {
    type: 'secondary',
    children: 'Secondary Button',
  },
  render: (args) => <Button {...args} />,
};

import { useState } from 'react';
import { Text, View } from 'react-native';
import Modal from '../../lib/components/Modal';
import Button from '../../lib/components/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const BasicModal = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{ padding: 16 }}>
      <Button type="primary" onPress={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        visible={visible}
        title="Modal Title"
        onConfirm={() => {}}
        onClose={() => setVisible(false)}
      >
        <Text>This is the modal content.</Text>
      </Modal>
    </View>
  );
};

export const Default = {
  render: () => <BasicModal />,
};

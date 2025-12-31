import { useState } from 'react';
import { Text, View } from 'react-native';
import Modal from '../../lib/components/Modal';
import Button from '../../lib/components/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

// All modal stories need to be interactive so you can close them

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
        onClose={() => setVisible(false)}
      >
        <Text>This is the modal content.</Text>
        <Button type="secondary" onPress={() => setVisible(false)}>
          Close
        </Button>
      </Modal>
    </View>
  );
};

export const Default = {
  render: () => <BasicModal />,
};

const MultipleChildrenModal = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{ padding: 16 }}>
      <Button type="primary" onPress={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        visible={visible}
        title="Welcome"
        onClose={() => setVisible(false)}
      >
        <Text>First line of content</Text>
        <Text>Second line of content</Text>
        <Text>Third line of content</Text>
        <Button type="secondary" onPress={() => setVisible(false)}>
          Close
        </Button>
      </Modal>
    </View>
  );
};

export const WithMultipleChildren = {
  render: () => <MultipleChildrenModal />,
};

const InteractiveModalComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ padding: 16 }}>
      <Button type="primary" onPress={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        visible={visible}
        title="Interactive Modal"
        onClose={() => setVisible(false)}
      >
        <Text>This modal starts closed - tap the button to open it!</Text>
        <Button type="secondary" onPress={() => setVisible(false)}>
          Close
        </Button>
      </Modal>
    </View>
  );
};

export const Interactive = {
  render: () => <InteractiveModalComponent />,
};

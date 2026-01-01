import { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
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

const CustomModalComponent = () => {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log('Submitted:', text);
    setText('');
    setVisible(false);
  };

  return (
    <View style={{ padding: 16 }}>
      <Button type="primary" onPress={() => setVisible(true)}>
        Open Custom Modal
      </Button>
      <Modal
        visible={visible}
        title="Enter Your Name"
        onClose={() => setVisible(false)}
        includeFooter={false}
      >
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={text}
          onChangeText={setText}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} type="secondary" onPress={() => setVisible(false)}>
            Cancel
          </Button>
          <Button style={styles.button} type="primary" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  button: {
    flex: 0.35,
  },
});

export const CustomModal = {
  render: () => <CustomModalComponent />,
};

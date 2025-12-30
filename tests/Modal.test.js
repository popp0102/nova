import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import Modal from '@nova/Modal';

describe('Modal', () => {
  it('renders with title and children', () => {
    const { getByText } = render(
      <Modal visible={true} title="Test Modal">
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByText('Test Modal')).toBeTruthy();
    expect(getByText('Modal Content')).toBeTruthy();
  });

  it('does not render when visible is false', () => {
    const { queryByText } = render(
      <Modal visible={false} title="Test Modal">
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(queryByText('Test Modal')).toBeNull();
  });
});

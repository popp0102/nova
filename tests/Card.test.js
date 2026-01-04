import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Card from '@nova/Card';

describe('Card', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Card onPress={mockOnPress}>
        <Text>Pressable Card</Text>
      </Card>
    );

    fireEvent.press(getByText('Pressable Card'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders as non-pressable when no onPress provided', () => {
    const { queryByRole } = render(
      <Card>
        <Text>Static Card</Text>
      </Card>
    );

    // Should not have a pressable wrapper
    const pressable = queryByRole('button');
    expect(pressable).toBeNull();
  });
});

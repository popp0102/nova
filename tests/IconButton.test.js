import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IconButton from '@nova/IconButton';

describe('IconButton', () => {
  it('renders correctly', () => {
    const { root } = render(
      <IconButton name="arrow-back" onPress={() => {}} />
    );
    expect(root).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <IconButton name="close" onPress={mockOnPress} testID="icon-button" />
    );

    const pressable = getByTestId('icon-button');
    fireEvent.press(pressable);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

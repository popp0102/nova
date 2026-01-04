import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Pressable } from 'react-native';
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
    const { UNSAFE_getByType } = render(
      <IconButton name="close" onPress={mockOnPress} />
    );

    const pressable = UNSAFE_getByType(Pressable);
    fireEvent.press(pressable);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

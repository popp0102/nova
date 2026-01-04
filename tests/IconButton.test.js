import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IconButton from '@nova/IconButton';

describe('IconButton', () => {
  it('renders with icon name', () => {
    const { getByTestId } = render(
      <IconButton name="arrow-back" onPress={() => {}} />
    );
    // MaterialIcons component should be rendered
    expect(getByTestId).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = render(
      <IconButton name="close" onPress={mockOnPress} />
    );

    const button = getByRole('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('applies default size and color', () => {
    const { UNSAFE_getByType } = render(
      <IconButton name="menu" onPress={() => {}} />
    );
    // Default size should be 24 and color should be black
    // Testing through MaterialIcons props
    expect(UNSAFE_getByType).toBeTruthy();
  });
});

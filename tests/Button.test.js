import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@nova/Button';

describe('Button', () => {
  it('renders with children text', () => {
    const { getByText } = render(<Button>Play</Button>);
    expect(getByText('Play')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button onPress={mockOnPress}>Play</Button>
    );

    fireEvent.press(getByText('Play'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

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

  it('renders with icon and iconPosition="top" in vertical layout', () => {
    const { getByText } = render(
      <Button icon="create" iconPosition="top">Create</Button>
    );
    expect(getByText('Create')).toBeTruthy();
  });

  it('renders with icon and iconPosition="left"', () => {
    const { getByText } = render(
      <Button icon="add" iconPosition="left">Add Item</Button>
    );
    expect(getByText('Add Item')).toBeTruthy();
  });

  it('renders with icon and iconPosition="right"', () => {
    const { getByText } = render(
      <Button icon="arrow-forward" iconPosition="right">Next</Button>
    );
    expect(getByText('Next')).toBeTruthy();
  });

  it('throws error for invalid iconPosition', () => {
    // Suppress console.error for this test
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<Button icon="add" iconPosition="bottom">Invalid</Button>);
    }).toThrow('Invalid iconPosition: "bottom". Must be "left", "right", or "top".');

    spy.mockRestore();
  });
});

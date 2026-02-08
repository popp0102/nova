import { render, fireEvent } from '@testing-library/react-native';
import ScreenHeader from '@nova/ScreenHeader';

describe('ScreenHeader', () => {
  it('renders with title', () => {
    const { getByText } = render(<ScreenHeader title="My Screen" />);
    expect(getByText('My Screen')).toBeTruthy();
  });

  it('calls onSelect when left icon is pressed', () => {
    const mockOnSelect = jest.fn();
    const { getByTestId } = render(
      <ScreenHeader title="My Screen" leftIcon={{ onSelect: mockOnSelect }} />
    );

    const leftIcon = getByTestId('screen-header-left-icon');
    fireEvent.press(leftIcon);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it('does not render left icon when leftIcon is not provided', () => {
    const { queryByTestId } = render(<ScreenHeader title="My Screen" />);
    expect(queryByTestId('screen-header-left-icon')).toBeNull();
  });

  it('renders left icon with default arrow-back', () => {
    const { getByTestId } = render(
      <ScreenHeader title="My Screen" leftIcon={{ onSelect: () => {} }} />
    );
    expect(getByTestId('screen-header-left-icon')).toBeTruthy();
  });

  it('renders left icon without pressable when onSelect is not provided', () => {
    const { getByTestId } = render(
      <ScreenHeader title="My Screen" leftIcon={{}} />
    );
    expect(getByTestId('screen-header-left-icon')).toBeTruthy();
  });

  it('renders with rightIcon', () => {
    const { getByTestId } = render(
      <ScreenHeader
        title="My Screen"
        rightIcon={{ name: "check-circle" }}
      />
    );
    expect(getByTestId('screen-header-right-icon')).toBeTruthy();
  });

  it('does not render rightIcon when not provided', () => {
    const { queryByTestId } = render(<ScreenHeader title="My Screen" />);
    expect(queryByTestId('screen-header-right-icon')).toBeNull();
  });

  it('calls onSelect when pressable rightIcon is pressed', () => {
    const mockOnSelect = jest.fn();
    const { getByTestId } = render(
      <ScreenHeader
        title="My Screen"
        rightIcon={{ name: "more-vert", onSelect: mockOnSelect }}
      />
    );

    const rightIcon = getByTestId('screen-header-right-icon');
    fireEvent.press(rightIcon);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it('applies custom titleColor', () => {
    const { getByText } = render(
      <ScreenHeader title="My Screen" titleColor="#FF0000" />
    );
    expect(getByText('My Screen')).toBeTruthy();
  });

  it('applies custom titleFontFamily', () => {
    const { getByText } = render(
      <ScreenHeader title="My Screen" titleFontFamily="Arial" />
    );
    expect(getByText('My Screen')).toBeTruthy();
  });
});

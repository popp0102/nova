import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import ScreenHeader from '@nova/ScreenHeader';

describe('ScreenHeader', () => {
  it('renders with title', () => {
    const { getByText } = render(<ScreenHeader title="My Screen" />);
    expect(getByText('My Screen')).toBeTruthy();
  });

  it('renders with title and subtitle', () => {
    const { getByText } = render(
      <ScreenHeader title="My Screen" subtitle="A cool subtitle" />
    );
    expect(getByText('My Screen')).toBeTruthy();
    expect(getByText('A cool subtitle')).toBeTruthy();
  });

  it('renders without subtitle when not provided', () => {
    const { queryByText } = render(<ScreenHeader title="My Screen" />);
    expect(queryByText('A cool subtitle')).toBeNull();
  });

  it('calls onBack when back button is pressed', () => {
    const mockOnBack = jest.fn();
    const { getByTestId } = render(
      <ScreenHeader title="My Screen" onBack={mockOnBack} />
    );

    const backButton = getByTestId('MaterialCommunityIcons');
    fireEvent.press(backButton.parent);
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('does not render back button when onBack is not provided', () => {
    const { queryByTestId } = render(<ScreenHeader title="My Screen" />);
    expect(queryByTestId('MaterialCommunityIcons')).toBeNull();
  });

  it('renders with rightContent', () => {
    const { getByText } = render(
      <ScreenHeader
        title="My Screen"
        rightContent={<Text>Badge</Text>}
      />
    );
    expect(getByText('Badge')).toBeTruthy();
  });

  it('applies custom titleColor', () => {
    const { getByText } = render(
      <ScreenHeader title="My Screen" titleColor="#FF0000" />
    );
    expect(getByText('My Screen')).toBeTruthy();
  });

  it('applies custom subtitleColor', () => {
    const { getByText } = render(
      <ScreenHeader
        title="My Screen"
        subtitle="Subtitle"
        subtitleColor="#0000FF"
      />
    );
    expect(getByText('Subtitle')).toBeTruthy();
  });

  it('applies custom titleFontFamily', () => {
    const { getByText } = render(
      <ScreenHeader title="My Screen" titleFontFamily="Arial" />
    );
    expect(getByText('My Screen')).toBeTruthy();
  });
});

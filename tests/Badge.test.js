import { render } from '@testing-library/react-native';
import Badge from '@nova/Badge';

describe('Badge', () => {
  it('renders with children text', () => {
    const { getByText } = render(<Badge>Test Badge</Badge>);
    expect(getByText('Test Badge')).toBeTruthy();
  });

  it('renders with left icon', () => {
    const { getByText } = render(
      <Badge leftIcon="star">Badge with icon</Badge>
    );
    expect(getByText('Icon: star')).toBeTruthy();
    expect(getByText('Badge with icon')).toBeTruthy();
  });

  it('renders with right icon', () => {
    const { getByText } = render(
      <Badge rightIcon="check">Badge with icon</Badge>
    );
    expect(getByText('Icon: check')).toBeTruthy();
    expect(getByText('Badge with icon')).toBeTruthy();
  });

  it('renders with both icons', () => {
    const { getByText } = render(
      <Badge leftIcon="star" rightIcon="close">Both icons</Badge>
    );
    expect(getByText('Icon: star')).toBeTruthy();
    expect(getByText('Icon: close')).toBeTruthy();
    expect(getByText('Both icons')).toBeTruthy();
  });
});

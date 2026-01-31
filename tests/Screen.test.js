import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Screen from '@nova/Screen';

describe('Screen', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Screen>
        <Text>Test Content</Text>
      </Screen>
    );
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('renders without gradient when gradientColors not provided', () => {
    const { root } = render(
      <Screen>
        <Text>No Gradient</Text>
      </Screen>
    );
    expect(root).toBeTruthy();
  });

  it('renders with gradient when gradientColors provided', () => {
    const { getByText } = render(
      <Screen gradientColors={['#FF0000', '#00FF00']}>
        <Text>With Gradient</Text>
      </Screen>
    );
    expect(getByText('With Gradient')).toBeTruthy();
  });

  it('renders with background image when provided', () => {
    const testImage = { source: { uri: 'test.png' }, opacity: 0.5 };
    const { getByText } = render(
      <Screen backgroundImage={testImage}>
        <Text>With Background</Text>
      </Screen>
    );
    expect(getByText('With Background')).toBeTruthy();
  });

  it('applies custom style', () => {
    const customStyle = { padding: 20 };
    const { getByText } = render(
      <Screen style={customStyle}>
        <Text>Custom Style</Text>
      </Screen>
    );
    expect(getByText('Custom Style')).toBeTruthy();
  });

  it('renders with both gradient and background image', () => {
    const testImage = { source: { uri: 'test.png' }, opacity: 0.3 };
    const { getByText } = render(
      <Screen gradientColors={['#8B7355', '#D4C4A8']} backgroundImage={testImage}>
        <Text>Full Featured</Text>
      </Screen>
    );
    expect(getByText('Full Featured')).toBeTruthy();
  });

  it('uses default opacity when not provided', () => {
    const testImage = { source: { uri: 'test.png' } };
    const { getByText } = render(
      <Screen backgroundImage={testImage}>
        <Text>Default Opacity</Text>
      </Screen>
    );
    expect(getByText('Default Opacity')).toBeTruthy();
  });
});

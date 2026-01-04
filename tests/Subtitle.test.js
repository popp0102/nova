import React from 'react';
import { render } from '@testing-library/react-native';
import Subtitle from '@nova/Subtitle';

describe('Subtitle', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Subtitle>Test Subtitle</Subtitle>
    );
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('applies default color and size', () => {
    const { getByText } = render(
      <Subtitle>Default Subtitle</Subtitle>
    );
    const element = getByText('Default Subtitle');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ color: '#777', fontSize: 14 })
      ])
    );
  });

  it('applies custom color', () => {
    const { getByText } = render(
      <Subtitle color="blue">Blue Subtitle</Subtitle>
    );
    const element = getByText('Blue Subtitle');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ color: 'blue' })
      ])
    );
  });

  it('applies different sizes', () => {
    const { getByText, rerender } = render(
      <Subtitle size="small">Small</Subtitle>
    );
    expect(getByText('Small').props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 12 })
      ])
    );

    rerender(<Subtitle size="large">Large</Subtitle>);
    expect(getByText('Large').props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 16 })
      ])
    );
  });
});

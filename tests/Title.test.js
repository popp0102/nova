import React from 'react';
import { render } from '@testing-library/react-native';
import Title from '@nova/Title';

describe('Title', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Title>Test Title</Title>
    );
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('applies default color and size', () => {
    const { getByText } = render(
      <Title>Default Title</Title>
    );
    const element = getByText('Default Title');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ color: 'black', fontSize: 24 })
      ])
    );
  });

  it('applies custom color', () => {
    const { getByText } = render(
      <Title color="blue">Blue Title</Title>
    );
    const element = getByText('Blue Title');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ color: 'blue' })
      ])
    );
  });

  it('applies different sizes', () => {
    const { getByText, rerender } = render(
      <Title size="small">Small</Title>
    );
    expect(getByText('Small').props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 20 })
      ])
    );

    rerender(<Title size="large">Large</Title>);
    expect(getByText('Large').props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 28 })
      ])
    );
  });
});

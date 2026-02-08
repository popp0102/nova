import React from 'react';
import { render } from '@testing-library/react-native';
import Heading from '@nova/Heading';

describe('Heading', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Heading>Test Heading</Heading>
    );
    expect(getByText('Test Heading')).toBeTruthy();
  });

  it('applies default color and size', () => {
    const { getByText } = render(
      <Heading>Default Heading</Heading>
    );
    const element = getByText('Default Heading');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ color: 'black', fontSize: 24 })
      ])
    );
  });

  it('applies custom color', () => {
    const { getByText } = render(
      <Heading color="blue">Blue Heading</Heading>
    );
    const element = getByText('Blue Heading');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ color: 'blue' })
      ])
    );
  });

  it('applies different sizes', () => {
    const { getByText, rerender } = render(
      <Heading size="h5">h5 Heading</Heading>
    );
    expect(getByText('h5 Heading').props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 20 })
      ])
    );

    rerender(<Heading size="h3">h3 Heading</Heading>);
    expect(getByText('h3 Heading').props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 36 })
      ])
    );
  });

  it('applies custom fontFamily', () => {
    const { getByText } = render(
      <Heading fontFamily="Courier">Custom Font</Heading>
    );
    const element = getByText('Custom Font');
    expect(element.props.style).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({ fontFamily: 'Courier' })
      ])
    );
  });
});

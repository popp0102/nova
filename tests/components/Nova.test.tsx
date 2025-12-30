import { render } from '@testing-library/react';
import Nova from '../../lib/components/Nova';

describe('Nova Component', () => {
  const subject = () => { render(<Nova />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

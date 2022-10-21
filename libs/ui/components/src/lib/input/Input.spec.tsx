import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input label="This is a label" />);
    expect(baseElement).toBeTruthy();
  });
});

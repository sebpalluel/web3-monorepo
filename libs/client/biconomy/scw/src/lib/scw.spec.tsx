import { render } from '@testing-library/react';

import ClientBiconomyScw from './scw';

describe('ClientBiconomyScw', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientBiconomyScw />);
    expect(baseElement).toBeTruthy();
  });
});

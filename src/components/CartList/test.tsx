import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import mockItem from './mock';

import CartList from '.';

describe('<CartList />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItem} total="R$ 330,00" />
    );

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' });

    expect(container.firstChild).toMatchSnapshot();
  });
});

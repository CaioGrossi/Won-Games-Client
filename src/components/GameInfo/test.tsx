import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'My game',
  description: 'My game description',
  price: 210
};
describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /my game/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/my game description/i)).toBeInTheDocument();
    expect(screen.getByText(/\$210\.0/)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});

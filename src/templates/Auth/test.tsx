import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render all components adn children', () => {
    renderWithTheme(
      <Auth title="Auth text">
        <input type="text" />
      </Auth>
    );

    expect(
      screen.getByRole('heading', { name: /Auth text/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /All your favorites games in one place/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming plataform/i
      })
    ).toBeInTheDocument();

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('shhould render the username', () => {
    renderWithTheme(<UserDropdown username="Grossi" />);

    expect(screen.getByText(/grossi/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Grossi" />);

    userEvent.click(screen.getByText(/grossi/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});

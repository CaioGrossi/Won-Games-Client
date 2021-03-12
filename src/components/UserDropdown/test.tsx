import { render, screen } from 'utils/test-utils';

import userEvent from '@testing-library/user-event';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('shhould render the username', () => {
    render(<UserDropdown username="Grossi" />);

    expect(screen.getByText(/grossi/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    render(<UserDropdown username="Grossi" />);

    userEvent.click(screen.getByText(/grossi/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});

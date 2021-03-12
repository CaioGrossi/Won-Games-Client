import { render, screen } from 'utils/test-utils';
import cardsMock from 'components/PaymentOptions/mock';

import CardList from '.';

describe('<CardList />', () => {
  it('should render the card list', () => {
    render(<CardList cards={cardsMock} />);

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'mastercard' })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    );

    expect(screen.getByText(/4325/)).toBeInTheDocument();
  });
});

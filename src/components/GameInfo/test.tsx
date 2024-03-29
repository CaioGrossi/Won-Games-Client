import { render, screen } from 'utils/test-utils';
import GameInfo from '.';
import 'session.mock';

const props = {
  id: '1',
  title: 'My game',
  description: 'My game description',
  price: 210
};
describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = render(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /my game/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/my game description/i)).toBeInTheDocument();
    expect(screen.getByText(/\$210\.0/)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    render(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument();
  });
});

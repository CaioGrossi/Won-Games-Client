import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import filterItemsMock from 'components/ExploreSidebar/mock';
import { MockedProvider } from '@apollo/client/testing';
import Games from '.';
import { QUERY_GAMES } from 'graphql/queries/games';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  }
}));

const mock = [
  {
    request: {
      query: QUERY_GAMES,
      variables: { limit: 15 }
    },
    result: {
      data: {
        games: [
          {
            name: 'RimWorld',
            slug: 'rimworld',
            cover: {
              url: '/uploads/rimworld_8e93acc963.jpg'
            },
            developers: [{ name: 'Ludeon Studios' }],
            price: 65.99,
            __typename: 'Game'
          }
        ]
      }
    }
  }
];

describe('<Games />', () => {
  it('should render loading when starting the template ', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={mock} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    expect(
      await screen.findByTestId('Mock ExploreSidebar')
    ).toBeInTheDocument();

    expect(await screen.findByText(/RimWorld/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument();
  });
});

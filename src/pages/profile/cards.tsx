import Profile from 'templates/Profile';
import CardList, { CardListProps } from 'components/CardList';
import mockCards from 'components/PaymentOptions/mock';
import { GetServerSidePropsContext } from 'next';
import protectedRoutes from 'utils/protected-routes';

export default function Cards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardList cards={cards} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = protectedRoutes(context);

  return {
    props: {
      cards: mockCards,
      session
    }
  };
}

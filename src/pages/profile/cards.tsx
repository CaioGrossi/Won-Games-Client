import Profile from 'templates/Profile';
import CardList, { CardListProps } from 'components/CardList';
import mockCards from 'components/PaymentOptions/mock';

export default function Cards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  };
}

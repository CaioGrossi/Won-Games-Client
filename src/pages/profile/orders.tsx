import Profile from 'templates/Profile';
import OrdersList, { OrdersListProps } from 'components/OrdersList';
import mockItems from 'components/OrdersList/mock';

export default function Cards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      items: mockItems
    }
  };
}

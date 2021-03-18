import Profile from 'templates/Profile';
import OrdersList, { OrdersListProps } from 'components/OrdersList';
import mockItems from 'components/OrdersList/mock';
import { GetServerSidePropsContext } from 'next';
import protectedRoutes from 'utils/protected-routes';

export default function Cards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const session = protectedRoutes(context);
  return {
    props: {
      items: mockItems,
      session
    }
  };
}

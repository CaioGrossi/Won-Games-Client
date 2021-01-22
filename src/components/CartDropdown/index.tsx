import Dropdown from 'components/Dropdown';
import { GameItemProps } from 'components/GameItem';
import CartIcon from 'components/CartIcon';
import CartList from 'components/CartList';
import * as S from './styles';

export type CartDropdownProps = {
  items?: GameItemProps[];
  total?: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList total={total} items={items} hasButton />
    </Dropdown>
  </S.Wrapper>
);

export default CartDropdown;

import { ShoppingCart } from '@styled-icons/material-outlined';

import Heading from 'components/Heading';
import Button from 'components/Button';

import * as S from './styles';

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom color="black" size="small">
          Payment
        </Heading>
      </S.Body>

      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>

        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentForm;

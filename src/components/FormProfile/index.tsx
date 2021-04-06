import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';

import * as S from './styles';
import Link from 'next/link';

export type FormProfileProps = {
  username?: string;
  email?: string;
};

const FormProfile = ({ username, email }: FormProfileProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="usernmame"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        type="email"
        initialValue={email}
        disabled
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </S.Wrapper>
);

export default FormProfile;

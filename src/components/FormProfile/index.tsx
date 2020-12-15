import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';

import * as S from './styles';

const FormProfile = () => (
  <S.Wrapper>
    <Heading color="black" lineBottom size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Caio Grossi"
      />

      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        type="email"
        initialValue="caiogrossi6@gmail.com"
        disabled
      />

      <TextField
        name="password"
        placeholder="Type your password"
        label="Password"
        type="password"
      />

      <TextField
        name="new_password"
        placeholder="New password"
        label="New password"
        type="password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
);

export default FormProfile;

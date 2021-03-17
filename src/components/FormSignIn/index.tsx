import * as S from './styles';
import Link from 'next/link';
import TextField from 'components/TextField';
import Button from 'components/Button';

import { FormWrapper, FormLink, FormLoading } from 'components/Form';
import { signIn } from 'next-auth/client';
import { Email, Lock } from '@styled-icons/material-outlined';
import { useState } from 'react';
import { useRouter } from 'next/router';

const FormSignIn = () => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    });

    if (result?.url) {
      return push(result.url);
    }

    setLoading(false);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(v) => handleInput('email', v)}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => handleInput('password', v)}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;

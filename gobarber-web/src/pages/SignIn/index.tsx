import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { WrapperSignIn, Content, BackGround, Form } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../context/AuthContext';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail is required')
            .email('Type a valid email'),
          password: Yup.string().required('Password Required'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({ email: data.email, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <WrapperSignIn>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1> Sign In</h1>
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="password"
          />

          <Button type="submit"> Enter </Button>

          <a href="/forgot-password"> Forgot Password</a>
        </Form>
        <a href="/Sign-up">
          <FiLogIn />
          Sign Up
        </a>
      </Content>
      <BackGround />
    </WrapperSignIn>
  );
};

export default SignIn;

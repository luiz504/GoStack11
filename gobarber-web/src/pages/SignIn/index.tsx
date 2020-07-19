import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { WrapperSignIn, Content, BackGround, Form } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <WrapperSignIn>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form>
          <h1> Sign In</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} placeholder="password" />

          <Button type="button"> Enter </Button>

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

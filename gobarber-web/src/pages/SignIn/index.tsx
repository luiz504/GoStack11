import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { WrapperSignIn, Content, BackGround, Form } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <WrapperSignIn>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form>
          <h1> Sign In</h1>
          <input placeholder="E-mail" />

          <input placeholder="password" />

          <button type="button"> Enter </button>

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

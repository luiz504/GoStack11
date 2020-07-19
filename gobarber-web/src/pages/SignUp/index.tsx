import React from 'react';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { WrapperSignIn, Content, BackGround, Form } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  function handleSubmit(data: string): void {
    console.log('data', data); //eslint-disable-line
  }

  return (
    <WrapperSignIn>
      <BackGround />

      <Content>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1> Sign Up</h1>
          <Input name="name" icon={FiUser} placeholder="name" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} placeholder="password" />

          <Button type="button"> Register </Button>
        </Form>

        <a href="/Sign-in">
          <FiArrowLeft />
          Return Sign In
        </a>
      </Content>
    </WrapperSignIn>
  );
};

export default SignUp;

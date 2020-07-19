import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { WrapperSignIn, Content, BackGround, Form } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  interface Idata {
    name: string;
    email: string;
    password: string;
  }

  const handleSubmit = useCallback(async (data: Idata) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('E-mail is required')
          .email('Type a valid email'),
        password: Yup.string().min(6, 'Minimum size 6 characteres'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log('error', error); //eslint-disable-line
    }
    console.log('data', data); //eslint-disable-line
  }, []);

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

          <Button type="submit"> Register </Button>
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

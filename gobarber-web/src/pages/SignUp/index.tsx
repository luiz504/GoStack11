import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import {
  WrapperSignIn,
  Content,
  AnimationContainer,
  BackGround,
  Form,
} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface Idata {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Idata) => {
    try {
      formRef.current?.setErrors({});
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
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <WrapperSignIn>
      <BackGround />

      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1> Sign Up</h1>
            <Input name="name" icon={FiUser} placeholder="name" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input name="password" icon={FiLock} placeholder="password" />

            <Button type="submit"> Register </Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Return Sign In
          </Link>
        </AnimationContainer>
      </Content>
    </WrapperSignIn>
  );
};

export default SignUp;

import React from 'react';
import { Image, Alert } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title> SignIn</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Password" />

      <Button
        onPress={() => {
          Alert.alert('deu');
        }}
      >
        Enter
      </Button>
    </Container>
  );
};

export default SignIn;

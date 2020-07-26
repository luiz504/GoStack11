import React, { useCallback, useRef } from 'react';
import {
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import Input, { InputRef } from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPW,
  ForgotPWText,
  SignUpBtn,
  SignUpBtnText,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const inputPwRef = useRef<InputRef>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(data => {
    console.debug('data', data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title> SignIn</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => inputPwRef.current?.focus()}
              />

              <Input
                ref={inputPwRef}
                name="password"
                icon="lock"
                placeholder="Password"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Enter
              </Button>
            </Form>

            <ForgotPW
              onPress={() => {
                Alert.alert('deu');
              }}
            >
              <ForgotPWText>Forgot password</ForgotPWText>
            </ForgotPW>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <SignUpBtn onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <SignUpBtnText>Sign Up</SignUpBtnText>
      </SignUpBtn>
    </>
  );
};

export default SignIn;

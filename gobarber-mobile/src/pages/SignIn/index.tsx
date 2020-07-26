import React, { useCallback, useRef } from 'react';
import {
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';

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

import getValidationErrors from '../../utils/getValidationErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const inputPwRef = useRef<InputRef>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
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

      // await signIn({ email: data.email, password: data.password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      Alert.alert('Faill to Authenticate', 'Check email and password');
    }
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
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>Enter</Button>

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

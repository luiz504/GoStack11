import React, { useRef, useCallback } from 'react';
import {
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import Input, { InputRef } from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackSignInBtn, BackSignInBtnText } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const inputEmailRef = useRef<InputRef>(null);
  const inputPwRef = useRef<InputRef>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        await api.post('/users', data);
        Alert.alert('Success!', 'You alredy can logn in!');

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Fail to create Account',
          'Something got wrong, try again later!',
        );
      }
    },
    [navigation],
  );

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
              <Title> Sign Up</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="name"
                icon="user"
                placeholder="Name"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => inputEmailRef.current?.focus()}
              />

              <Input
                ref={inputEmailRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
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
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>Enter</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackSignInBtn onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackSignInBtnText>Sign In</BackSignInBtnText>
      </BackSignInBtn>
    </>
  );
};

export default SignUp;

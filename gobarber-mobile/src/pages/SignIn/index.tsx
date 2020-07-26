import React from 'react';
import {
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ScrollView } from 'react-native-gesture-handler';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
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

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="password" icon="lock" placeholder="Password" />

            <Button
              onPress={() => {
                Alert.alert('deu');
              }}
            >
              Enter
            </Button>

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

      <SignUpBtn
        onPress={() => {
          Alert.alert('deu');
        }}
      >
        <>
          <Icon name="log-in" size={20} color="#ff9000" />
          <SignUpBtnText>Sign Up</SignUpBtnText>
        </>
      </SignUpBtn>
    </>
  );
};

export default SignIn;

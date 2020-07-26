import React from 'react';
import {
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackSignInBtn, BackSignInBtnText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          // contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title> Sign Up</Title>
            </View>

            <Input name="name" icon="user" placeholder="Name" />

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
        </ScrollView>
      </KeyboardAvoidingView>

      <BackSignInBtn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackSignInBtnText>Sign In</BackSignInBtnText>
      </BackSignInBtn>
    </>
  );
};

export default SignUp;

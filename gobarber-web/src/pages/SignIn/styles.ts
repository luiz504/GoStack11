import styled from 'styled-components';
import { shade } from 'polished';

import SignInBGImg from '../../assets/sign-in-background.png';

export const WrapperSignIn = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;

    color: #ff9000;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    > svg {
      margin-right: 16px;
    }
  }
`;

export const BackGround = styled.div`
  flex: 1;
  background: url(${SignInBGImg}) no-repeat center;
  background-size: cover;
`;

export const Form = styled.form`
  margin: 80px 0;
  width: 340px;
  text-align: center;

  > h1 {
    margin-bottom: 24px;
  }

  input {
    width: 100%;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    color: #f4efe8;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  > button {
    height: 56px;
    width: 100%;

    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    background: #ff9000;
    color: #312e38;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  > a {
    display: block;
    margin-top: 24px;

    color: #f4efe8;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4efe8')};
    }
  }
`;

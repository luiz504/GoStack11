import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { robotoSlabRegular } from '../../styles/fonts';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 60px;
  width: 100%;

  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: #232129;
  border-width: 2px;
  border-color: #232129;

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: #fff;
  font-size: 16px;
  font-family: ${robotoSlabRegular};
`;

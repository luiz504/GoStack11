import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { robotoSlabRegular } from '../../styles/fonts';

export const Container = styled.View`
  height: 60px;
  width: 100%;

  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;

  background: #232129;
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

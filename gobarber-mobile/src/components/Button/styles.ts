import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { robotoSlabMedium } from '../../styles/fonts';

export const Container = styled(RectButton)`
  height: 60px;
  width: 100%;

  margin-top: 8px;
  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-family: ${robotoSlabMedium};
  color: #312e38;
  font-size: 16px;
`;

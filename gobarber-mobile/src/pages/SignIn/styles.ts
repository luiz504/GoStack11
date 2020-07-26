import styled from 'styled-components/native';
import { robotoSlabMedium } from '../../styles/fonts';

export const Container = styled.View`
  padding: 0 30px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: ${robotoSlabMedium};
  margin: 64px 0 24px;
`;

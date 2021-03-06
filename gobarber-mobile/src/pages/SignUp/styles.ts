import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { robotoSlabMedium, robotoSlabRegular } from '../../styles/fonts';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;

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

export const BackSignInBtn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 16px 0 ${16 + getBottomSpace()}px;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackSignInBtnText = styled.Text`
  margin-left: 16px;

  color: #fff;
  font-size: 18px;
  font-family: ${robotoSlabRegular};
`;

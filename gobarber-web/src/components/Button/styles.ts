import styled from 'styled-components';
import { shade } from 'polished';

export const Btn = styled.button`
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
`;

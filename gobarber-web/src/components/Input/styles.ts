import styled, { css } from 'styled-components';

interface WrapperInputProps {
  isFocused: boolean;
  isFilled: boolean;
}
export const WrapperInput = styled.div<WrapperInputProps>`
  width: 100%;

  padding: 16px;

  border-radius: 10px;
  background: #232129;

  border: 2px solid #232129;
  color: #666360;
  transition: border-color 0.2s;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;

    border: 0;
    color: #f4efe8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

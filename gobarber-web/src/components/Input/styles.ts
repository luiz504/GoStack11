import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface WrapperInputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const WrapperInput = styled.div<WrapperInputProps>`
  width: 100%;
  height: 56px;

  padding: 0 16px;

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
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

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
    height: 100%;
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

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {

  -webkit-text-fill-color: #ff9000;
  font-weight: bold;
  -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
  transition: background-color 5000s ease-in-out 0s;
}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #cf3030 transparent;
    }
  }
`;

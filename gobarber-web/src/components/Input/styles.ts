import styled from 'styled-components';

export const WrapperInput = styled.div`
  width: 100%;

  padding: 16px;

  border-radius: 10px;
  border: 2px solid #232129;
  color: #666360;
  background: #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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

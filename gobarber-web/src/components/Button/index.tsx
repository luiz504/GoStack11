import React, { ButtonHTMLAttributes } from 'react';

import { Btn } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Btn type="button" {...rest}>
      {children}
    </Btn>
  );
};

export default Button;

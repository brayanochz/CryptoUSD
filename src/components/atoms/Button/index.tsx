import React, { FC } from 'react';

const Button: FC<React.InputHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

export default Button;
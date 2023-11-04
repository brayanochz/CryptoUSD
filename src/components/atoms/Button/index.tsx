import React, { FC } from 'react';

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className='my-1 rounded-lg bg-gray-500 color-white px-4' {...props}>
      {children}
    </button>
  );
};

export default Button;
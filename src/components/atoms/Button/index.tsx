import React, { FC } from 'react';

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <div className='flex flex-col justify-start px-2'>
      <button className='my-1 rounded-lg bg-gray-500 color-white px-4' {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
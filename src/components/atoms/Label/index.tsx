import React, { FC } from 'react';

const Label: FC<React.AllHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => {
  return (
    <label {...props} className='text-xs'>
      {children}
    </label>
  );
};

export default Label;
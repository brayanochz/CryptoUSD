import React, { FC } from 'react';

interface LabelProps {
  children?: React.ReactNode
}

const Label: FC<LabelProps> = ({ children }) => {
  return (
    <label className='text-xs'>
      {children}
    </label>
  );
};

export default Label;
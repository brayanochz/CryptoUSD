import React, { FC } from 'react';

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {

  return (
    <input className='px-1 w-250px sm:w-150px my-1 rounded-lg bg-transparent color-white border border-neutral-600' {...props} id={props.id || props.name} />
  );
};

export default Input;
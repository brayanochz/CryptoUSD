import { SelectOption } from '@/types';
import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

interface SelectProps extends React.AllHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[],
  customRender?: React.ReactNode,
}

const Select: FC<SelectProps> = ({ options, defaultValue, ...props }) => {
  return (
    <select defaultValue={defaultValue} className='px-1 my-1 rounded-lg bg-transparent color-white border border-neutral-600' {...props} id={props.id || props.name}>
      {options?.map(item => (<option className='bg-gray-600 text-white' key={uuid()} value={item.value}>{item.label}</option>))}
    </select>
  );
};

export default Select;
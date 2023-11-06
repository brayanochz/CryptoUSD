import Label from '@/components/atoms/Label';
import Select from '@/components/atoms/Select';
import { SelectOption } from '@/types';
import React, { FC } from 'react';

interface SelectFieldProps extends Omit<React.AllHTMLAttributes<HTMLSelectElement>, 'label'> {
  options?: SelectOption[],
  customRender?: React.ReactNode,
  label?: string | React.ReactNode
}

const SelectField: FC<SelectFieldProps> = ({ label, options, customRender, ...props }) => {
  return (
    <div className='flex flex-col justify-start px-2'>
      {label ? <Label htmlFor={props.id || props.name}>{label}</Label> : <></>}
      <Select options={options} customRender={customRender} {...props} />
    </div>
  );
};

export default SelectField;
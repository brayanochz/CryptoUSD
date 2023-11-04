import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import React, { FC } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode
}

const TextField: FC<TextFieldProps> = ({ label, ...props }) => {
  return (
    <div className='flex flex-col justify-start px-2'>
      {label ? <Label >{label}</Label> : <></>}
      <Input {...props} />
    </div>
  );
};

export default TextField;
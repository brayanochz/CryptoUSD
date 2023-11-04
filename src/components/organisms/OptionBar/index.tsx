import Button from '@/components/atoms/Button';
import TextField from '@/components/molecules/TextField';
import { FilterType } from '@/types';
import React, { FC } from 'react';

interface OptionBarProps {
  filter: FilterType
}

const OptionBar: FC<OptionBarProps> = ({ filter }) => {
  return (
    <section className='my-2 p-2'>
      <form className='flex justify-end items-end' action={'/'} method='GET'>

        <TextField label={'Search by name'} type='text' placeholder='Name' name='name' defaultValue={filter['name']} />

        <TextField label={'Search by symbol'} type='text' placeholder='Symbol' name='symbol' defaultValue={filter['symbol']} />

        <Button type='submit'>Filter</Button>
      </form>
    </section>
  );
};

export default OptionBar;
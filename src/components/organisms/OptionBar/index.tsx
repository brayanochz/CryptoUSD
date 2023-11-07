import Button from '@/components/atoms/Button';
import SelectField from '@/components/molecules/SelectField';
import TextField from '@/components/molecules/TextField';
import { FilterType, SelectOption } from '@/types';
import React, { FC } from 'react';

interface OptionBarProps {
  filter: FilterType,
  currencies?: SelectOption[]
  selectedCurrency?: string
  page?: string
}

const OptionBar: FC<OptionBarProps> = ({ filter, currencies, selectedCurrency, page = 1 }) => {
  return (
    <section className='my-2 p-2'>
      <form className='flex justify-end items-end' action={`/home/${page}`} method='GET'>

        <SelectField defaultValue={selectedCurrency} name='currency' label={'Select currency'} options={currencies} />

        <TextField label={'Search by name'} type='text' placeholder='Name' name='name' defaultValue={filter['name']} />

        <TextField label={'Search by symbol'} type='text' placeholder='Symbol' name='symbol' defaultValue={filter['symbol']} />

        <Button type='submit'>Apply</Button>
      </form>
    </section>
  );
};

export default OptionBar;
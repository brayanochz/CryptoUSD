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

/**
 * The OptionBar component displays a set of filter and search options for data manipulation.
 *
 * @param {OptionBarProps} props - The props for the OptionBar component.
 * @returns {JSX.Element} - A React JSX element representing the OptionBar component.
 */
const OptionBar: FC<OptionBarProps> = ({ filter, currencies, selectedCurrency, page = 1 }) => {
  return (
    <section className='my-2 p-2'>
      <form className='flex flex-col sm:flex-row justify-end sm:items-end items-start space-y-2 sm:space-y-0 sm:space-x-2' action={`/home/${page}`} method='GET'>

        <SelectField defaultValue={selectedCurrency} name='currency' label={'Select currency'} options={currencies} />

        <TextField label={'Search by name'} type='text' placeholder='Name' name='name' defaultValue={filter['name']} />

        <TextField label={'Search by symbol'} type='text' placeholder='Symbol' name='symbol' defaultValue={filter['symbol']} />

        <Button type='submit'>Apply</Button>
      </form>
    </section>
  );
};

export default OptionBar;
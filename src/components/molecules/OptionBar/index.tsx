import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { FilterType } from '@/types';
import React, { FC } from 'react';

interface OptionBarProps {
  filter: FilterType
}

const OptionBar: FC<OptionBarProps> = ({ filter }) => {
  return (
    <section>
      <form action={'/'} method='GET'>
        <Input type='text' placeholder='Name' name='name' value={filter['name']} defaultValue={filter['name']} />
        <Input type='text' placeholder='Symbol' name='symbol' value={filter['symbol']} />
        <Button type='submit'>Filter</Button>
      </form>
    </section>
  );
};

export default OptionBar;
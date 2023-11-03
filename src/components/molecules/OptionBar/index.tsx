import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import React from 'react';

const OptionBar = () => {
  return (
    <section>
      <form action={'/'} method='GET'>
        <Input type='text' placeholder='Coin name' name='coin' />
        <Button type='submit'>Filter</Button>
      </form>
    </section>
  );
};

export default OptionBar;
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownSelect from './DropdownSelect';

export default {
  title: 'Form Components/DropdownSelect',
  component: DropdownSelect,
  argTypes: {
    status: {
      control: { type: 'select', options: ['default', 'valid', 'error'] }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    multiple: {
      control: { type: 'boolean' }
    },
    value: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof DropdownSelect>;

const fruitOptions = [
  { value: '', labelText: 'Select a fruit...' },
  { value: 'apple', labelText: 'Apple' },
  { value: 'banana', labelText: 'Banana' },
  { value: 'cherry', labelText: 'Cherry' },
  { value: 'date', labelText: 'Date' },
  { value: 'elderberry', labelText: 'Elderberry', disabled: true }
];

const Template: ComponentStory<typeof DropdownSelect> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value || '');
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  
  return (
    <DropdownSelect 
      {...args} 
      value={selectedValue} 
      onChange={handleChange} 
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'fruit-select',
  name: 'fruit',
  labelText: 'Select a Fruit',
  options: fruitOptions,
  helperText: 'Choose your favorite fruit',
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  ...Default.args,
  id: 'fruit-select-with-value',
  value: 'banana',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  id: 'fruit-select-disabled',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  id: 'fruit-select-error',
  status: 'error',
  errorText: 'Please select a valid fruit',
};

export const Valid = Template.bind({});
Valid.args = {
  ...Default.args,
  id: 'fruit-select-valid',
  status: 'valid',
};

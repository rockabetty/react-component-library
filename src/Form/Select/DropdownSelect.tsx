import React from 'react';
import classNames from 'classnames';
import '../../design/style.css';
import '../Form.css';
import FormField from '../atoms/FormField';
import {InputProps} from '../../types/input';
import {default as Label} from '../atoms/Label';
import { WidthSize } from '../atoms/WriteInField';

type Option = {
  value: string;
  labelText: string;
  disabled?: boolean;
  onClick?: () => {};
}

export interface SelectProps extends InputProps {
  options: Option[];
  multiple?: boolean;
  size: WidthSize
}

const DropdownSelect = (props: SelectProps) => {

  const {
    placeholderText,
    disabled,
    id,
    name,
    onChange,
    tabIndex,
    value,
    labelText,
    options,
    helperText,
    errorText,
    multiple,
    size
  } = props;
  
  return(
    <FormField
      classes={classNames({
        'Compact': true,
        'Disabled': disabled,
        'Error': status === 'error',
        [`FieldWidth-${size || 'full'}`]: true
      })}
    >
      <Label labelText={labelText}/>
      <select
        className={`form-field_control ${classNames({
          'Valid' : status === 'valid',
          'Error' : status === 'error'
        })}`.trim()}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        tabIndex={tabIndex}
        value={value}
        multiple={multiple}
      >
        {placeholderText && (
          <option disabled value="">{placeholderText}</option>
        )}
        {options.map((option, idx) => {
          return (
            <option
              key={`dropdown-select-${idx}`}
              className="form-field_option"
              value={option.value} 
              label={option.labelText} 
              disabled={option.disabled} 
              onClick={option.onClick}
            />)
        })}
      </select>
      { helperText || status === 'error' ?
        <p className="form-field_helpertext">
          {status === 'error' ? errorText : helperText }
        </p>
        :
        null
      }
    </FormField>
  )
}

export default DropdownSelect
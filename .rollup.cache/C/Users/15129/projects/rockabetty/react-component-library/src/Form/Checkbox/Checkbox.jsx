import React from 'react';
import classNames from 'classnames';
import '../../design/style.css';
import FormField from '../atoms/FormField';
import './Checkbox.css';
const Checkbox = ({ id, classes = '', checked = false, disabled = false, errorText = 'Please review your input.', helperText, labelText = 'Label', name = '', onChange = () => { }, tabIndex = 0, value = '', status }) => {
    return (<FormField classes={classNames({
            'Compact': true,
            'Disabled': disabled,
            'Error': status === 'error'
        })}>
      <input checked={checked} className={`checkbox_control ${classes} ${classNames({
            'Valid': status === 'valid',
            'Error': status === 'error'
        })}`.trim()} disabled={disabled} id={id} name={name} onChange={onChange} tabIndex={tabIndex} type='checkbox' value={value}/>
      <label className="checkbox_label" htmlFor={id}>
        {labelText}
      </label>
      {helperText || status === 'error' ?
            <p className="checkbox_helpertext">
          {status === 'error' ? errorText : helperText}
        </p>
            :
                ''}
    </FormField>);
};
export default Checkbox;
//# sourceMappingURL=Checkbox.jsx.map
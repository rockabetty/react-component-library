import React from 'react';
import classNames from 'classnames';
import '../../design/style.css';
import FormField from '../atoms/FormField';
import './Radio.css';
const Radio = ({ id, labelText = 'Label', checked = false, disabled = false, status = '', name = '', value = '', tabIndex = 0, onChange, }) => {
    return (<FormField classes={classNames({
            'Compact': true,
            'Disabled': disabled,
            'Error': status === 'error'
        })}>
      <input checked={checked} className={`radio_control ${classNames({
            'Valid': status === 'valid',
            'Error': status === 'error'
        })}`.trim()} disabled={disabled} id={id} name={name} onChange={onChange} type='radio' tabIndex={tabIndex} value={value}/>
      <label className="radio_label" htmlFor={id}>
        {labelText}
      </label>
    </FormField>);
};
export default Radio;
//# sourceMappingURL=Radio.jsx.map
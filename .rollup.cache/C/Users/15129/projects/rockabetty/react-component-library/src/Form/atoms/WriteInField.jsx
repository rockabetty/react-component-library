import React, { useRef } from 'react';
import classNames from 'classnames';
import '../../design/style.css';
import { default as Label } from './Label';
import { default as FormField } from './FormField';
import { useValidation } from '../hooks/useValidation';
const WriteInField = (props) => {
    const { id = "", type = "text", disabled = false, max, min, maxLength, minLength, name = "", onBlur = () => { }, onChange = () => { }, onClick = () => { }, pattern, labelText = "", placeholderText = "", helperText = "", errorText = "", classes, required, value } = props;
    const { valid, error, validate } = useValidation({
        value,
        required,
        pattern,
        maxLength,
        minLength,
        min,
        max
    });
    const textareaRef = useRef(null);
    const renderHelperOrErrorText = () => {
        if (!helperText && !errorText && !error)
            return null;
        return (<p id={`helpertext_${id || labelText}`} className={classNames({ "form-field_helpertext": true, "Error": !!errorText })}>
        {errorText || error || helperText}
      </p>);
    };
    const textAreaChangeHandler = function (e) {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset the height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the new height
        }
        onChange(e);
    };
    const inputChangeHandler = function (e) {
        onChange(e);
    };
    const handleChange = type === 'textarea' ? textAreaChangeHandler : inputChangeHandler;
    const inputProps = {
        className: `form-field_control ${classes}`.trim(),
        value,
        disabled,
        id,
        max,
        maxLength,
        name,
        min,
        onBlur: (e) => {
            validate();
            onBlur && onBlur(e);
        },
        onChange: handleChange,
        onClick,
        pattern,
        placeholder: placeholderText,
        required,
        type
    };
    const renderInputField = () => {
        if (type === 'textarea') {
            return <textarea ref={textareaRef} {...inputProps}/>;
        }
        else {
            return <input {...inputProps} aria-describedby={`helpertext_${id || labelText}`}/>;
        }
    };
    return (<FormField classes={classNames({
            'Disabled': disabled,
            'Error': error || errorText,
            'Valid': !errorText && valid
        })}>
      <Label htmlFor={id || `label-${labelText}`} labelText={labelText || "MISSING LABEL"} required={required}/>
      {renderInputField()}
      {renderHelperOrErrorText()}
    </FormField>);
};
export default WriteInField;
//# sourceMappingURL=WriteInField.jsx.map
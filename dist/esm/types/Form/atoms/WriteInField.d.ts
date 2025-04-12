import React from 'react';
import { InputProps } from '../../types/input';
import '../../design/style.css';
export interface WriteInFieldProps extends InputProps {
    /**
     * Add placeholder text to provide an example input value.
    */
    placeholderText?: string;
    /**
     * Specify the input type.
    */
    type?: 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'datetime-local' | 'date' | 'time' | 'url' | 'week' | 'textarea';
    /**
     * A maximum value when entering dates or numbers
    */
    max?: number;
    /**
     * A minimum value when entering dates or numbers
    */
    min?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    /**
     * Give the user information to understand the field
     */
    helperText?: string;
    /**
     * Give the user feedback on why their input is wrong
     */
    errorText?: string;
}
declare const WriteInField: React.FC<WriteInFieldProps>;
export default WriteInField;

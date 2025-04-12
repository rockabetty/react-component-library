import React from 'react';
import '../../design/style.css';
import './Checkbox.css';
export interface CheckboxProps {
    /**
     * Specify the unique ID of the input
    */
    id?: string;
    labelText: string;
    /**
     * Optional additional styling
    */
    classes?: string;
    /**
     * If something should be rendered checked by default, indicate so here.
     */
    checked?: boolean;
    /**
     * A disabled checkbox renders, but is not interactable.
    */
    disabled?: boolean;
    /**
     * Give a specific error message for form validation.
     */
    errorText?: string;
    /**
     * Give the user additional instructions for assistance
    */
    helperText?: string;
    /**
     * HTML name attribute to pass down
     */
    name?: string;
    /**
     * Provide an onChange handler
    */
    onChange: (...params: any) => any;
    /**
     * Determine which status to render the checkbox in.
    */
    status?: 'default' | 'valid' | 'error';
    /**
     * Provide a tab index
    */
    tabIndex?: number;
    value?: string | number | readonly string[] | undefined;
}
declare const Checkbox: ({ id, classes, checked, disabled, errorText, helperText, labelText, name, onChange, tabIndex, value, status }: CheckboxProps) => React.JSX.Element;
export default Checkbox;

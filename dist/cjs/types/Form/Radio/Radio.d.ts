import React from 'react';
import '../../design/style.css';
import './Radio.css';
export interface RadioProps {
    /**
     * Specify the unique ID of the input
    */
    id?: string;
    labelText: string;
    /**
     * If something should be rendered checked by default, indicate so here.
     */
    checked?: boolean;
    /**
     * A disabled checkbox renders, but is not interactable.
    */
    disabled?: boolean;
    /**
     * Set a radio button as valid, error, or none (default)
    */
    status?: 'valid' | 'error' | '';
    /**
     * Give the radio a name for a radio group
     */
    name: string;
    /**
     * Give the radio input a value
    */
    value: string | number;
    /**
     * Provide an onChange handler
    */
    onChange: (...params: any) => any;
    /**
     * Give a specific error message for form validation.
     */
    tabIndex?: number;
}
declare const Radio: ({ id, labelText, checked, disabled, status, name, value, tabIndex, onChange, }: RadioProps) => React.JSX.Element;
export default Radio;

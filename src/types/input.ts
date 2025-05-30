import { RefObject } from 'react';
import { InteractiveProps } from './interactive'

export interface InputProps extends InteractiveProps {
    /**
     * Define a string that designates what an interactive item is for
    */
    labelText?: string 
    /**
     * Define a string value that labels an interactive element.
     * Not necessary if there is already an actual label element.
    */
    ariaLabel?: string;
    /**
    * The ID of the element (or elements) that label the element it is applied to.
    * Not necessary if there is already an actual lable in the element.
    */
    ariaLabelledby?: string;
    /**
     * Determine if this element should be rendered with 'error' class 
    */
    hasError?: boolean;
    /**
     *  A name for HTML semantics, to get form data, etc.
    */
    name?: string;
    /**
     * Designates whether an input is valid
     */
    isValid?: boolean;
    /**
    * Determine behavior when the user changes the value of the element
    */
    onChange: (...params: any) => any;
    /**
    * If you want to track the value of an interactive element by ref
    * This is a matter of technical execution details in context
    */
    refer?: RefObject<HTMLInputElement> | null;
    /**
    * Designate if an input element is required for form to be valid
    */
    required?: boolean;
    value?: "checked" | string | number;
    /**
    * Provide placeholder text for when no value is set. 
    */
    placeholderText?: string
    /**
    * Give the user information to understand the field
    */
    helperText?: string;
    /**
    * Give the user feedback on why their input is wrong
    */ 
    errorText?: string;
    /**
    * Control the appearance of an input based on validity
    */
    status?: "valid" | "error"
}
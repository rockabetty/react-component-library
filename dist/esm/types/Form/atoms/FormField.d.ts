import React from 'react';
import '../../design/style.css';
import '../Form.css';
export interface FormFieldProps {
    id?: string;
    children: React.ReactNode;
    classes?: string;
    disabled?: boolean;
    hasError?: boolean;
}
declare const FormField: ({ children, classes, disabled, hasError, }: FormFieldProps) => React.JSX.Element;
export default FormField;

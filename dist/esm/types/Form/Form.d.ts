import React, { ReactNode } from "react";
import "./Form.css";
import { InteractiveProps } from "../types/interactive";
type FormValues = {
    [key: string]: any;
};
export interface FormProps extends InteractiveProps {
    onSubmit: (formValues: FormValues) => any;
    onCancel?: (...params: any) => any;
    onSuccess?: (...params: any) => any;
    onFailure?: (...params: any) => any;
    submissionError?: string | null;
    cancelLabel?: string;
    submitLabel: string;
    children: ReactNode;
    isLoading?: boolean;
    successMessage?: string;
    isDestructive?: boolean;
    formValues: FormValues;
    disabled?: boolean;
}
declare const Form: React.FC<FormProps>;
export default Form;

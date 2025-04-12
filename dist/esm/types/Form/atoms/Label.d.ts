import React from 'react';
import { InteractiveProps } from '../../types/interactive';
export interface LabelProps extends InteractiveProps {
    htmlFor: string;
    labelText: string;
    hasError?: boolean;
    required?: boolean;
}
declare const Label: React.FC<LabelProps>;
export default Label;

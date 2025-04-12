import React from 'react';
import '../../design/style.css';
import '../Form.css';
export interface FieldSetProps {
    legend: string;
}
declare const FieldSet: ({ children, legend }: FieldGroupProps) => React.JSX.Element;
export default FieldSet;

import React from 'react';
import '../../design/style.css';
import '../Form.css';
import { InputProps } from '../../types/input';
type Option = {
    value: string;
    labelText: string;
    disabled?: boolean;
    onClick?: () => {};
};
export interface SelectProps extends InputProps {
    options: Option[];
    multiple?: boolean;
}
declare const DropdownSelect: (props: SelectProps) => React.JSX.Element;
export default DropdownSelect;

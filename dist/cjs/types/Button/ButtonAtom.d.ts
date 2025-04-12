import React from 'react';
import '../design/style.css';
import './Button.css';
interface ButtonAtomProps {
    id?: string;
    children: React.ReactNode;
    look?: 'primary' | 'default' | 'muted' | 'warning' | undefined;
    classes?: string;
    disabled?: boolean;
    onClick?: (...params: any) => any;
    role?: string;
    tabIndex?: number;
    type?: 'button' | 'reset' | 'submit';
    loading?: boolean;
    inline?: boolean;
    inverse?: boolean;
}
declare const ButtonAtom: ({ id, look, children, disabled, loading, onClick, role, tabIndex, type, inline, classes, inverse }: ButtonAtomProps) => React.JSX.Element;
export default ButtonAtom;

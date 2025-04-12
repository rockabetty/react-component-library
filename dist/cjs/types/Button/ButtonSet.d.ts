import React from 'react';
import './Button.css';
export interface ButtonSetProps {
    id?: string;
    children: React.ReactNode;
}
declare const Button: ({ id, children }: ButtonSetProps) => React.JSX.Element;
export default Button;

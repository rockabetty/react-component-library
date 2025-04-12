import React from 'react';
import '../design/style.css';
import './Icon.css';
export interface IconProps {
    id?: string;
    /** Optional additional styling
    */
    classes?: string;
    /** String to decide what to display
    */
    name: string;
    /** Height of icon to control visual size
    */
    height?: number;
    /** Title of icon for accessibility, descriptions
    */
    title?: string;
    /** Width of icon to control visual size
    */
    width?: number;
    /** Manually enter a viewbox to override the default 0 0 12 12
    */
    viewbox?: string;
    /** A disabled icon will render in a new color and be noninteractive
    */
    disabled?: boolean;
}
declare const Icon: ({ id, classes, name, viewbox, title, width, height, disabled, }: IconProps) => React.JSX.Element;
export default Icon;

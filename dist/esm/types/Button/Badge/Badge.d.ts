import React from 'react';
import '../../design/style.css';
import './Badge.css';
export interface BadgeProps {
    id?: string;
    /**
     * "primary": highlights the next logical step forward.
     * "warning": denotes the button destroys data, e.g. 'delete'.
     * "muted": For coupling with primary buttons as the 'backward' step.
     */
    look?: 'primary' | 'default' | 'muted' | 'warning' | undefined;
    /**
     * A disabled button renders but can no longer be clicked.
     */
    disabled?: boolean;
    /**
     * All buttons must have labels for accessibility purposes
    */
    label?: string;
    /**
     * Set 'showLabel' to true to show a text label next to the icon.
    */
    showLabel?: boolean;
    /**
     * A function to be called when the button is clicked
     */
    onClick?: (...params: any) => any;
    tabIndex?: number;
    /**
     * A name for an icon to place in the badge
    */
    icon: string;
    /**
    * Control the width of an icon SVG
    */
    width?: number;
    /**
     * Control the height of an icon SVG
     */
    height?: number;
    /**
     * Specify the viewbox of an icon SVG
     */
    viewbox?: string;
    size?: 'md' | 'sm' | 'lg';
}
declare const Badge: ({ id, viewbox, look, disabled, onClick, tabIndex, icon, label, size, width, height, showLabel }: BadgeProps) => React.JSX.Element;
export default Badge;

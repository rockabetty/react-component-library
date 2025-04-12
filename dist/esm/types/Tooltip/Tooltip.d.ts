import React from 'react';
import './Tooltip.css';
interface TooltipProps {
    label: string;
    content: React.ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;

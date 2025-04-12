import React from 'react';
import '../design/style.css';
import './Accordion.css';
export interface AccordionProps {
    id?: string;
    /**
     * Children are visible when the accordion is open
    */
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    title: string;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;

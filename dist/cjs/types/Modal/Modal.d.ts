import React from 'react';
import '../design/style.css';
import './Modal.css';
export interface ModalProps {
    /**
     * Label for whatever the action the modal is associated with, eg 'save'.
    */
    actionButtonLabel?: string;
    /**
     * Required property for accessibility. This will be read by screen readers.
    */
    ariaLabel: string;
    /**
     * Children for the modal
    */
    children: React.ReactNode;
    /**
     * Pass in a custom CSS class
    */
    classes?: string;
    /**
     * Accessibility-minded label for the close button. Default is "close".
    */
    closeButtonLabel?: string;
    /**
    * Set the content of the modal's header (title).
    */
    heading?: string;
    /**
     * For screen readers, which will read the modal differently if this is an alert.
    */
    isAlert?: boolean;
    /**
     * DOM element ID of the top level node
    */
    id: string;
    /**
     * Whether the modal is open.
    */
    isOpen: boolean;
    /**
     * Designate that moving forward will delete data.
    */
    isWarning?: boolean;
    /**
     * Handler for keypresses (down)
    */
    onKeyDown?: (...params: any) => any;
    /**
     * Handler for closing a modal.  The handler passed in should change the `isOpen` property.
    */
    onClose: (...params: any) => any;
    /**
     * Handler for confirming an interactive modal's intended action (such as submitting a form). The handler passed in should change the `isOpen` property.
    */
    onAction?: (...params: any) => any;
    /**
    * If true, clicking outside the modal will not close the modal.
    */
    persistent?: boolean;
    /**
     * Control width of modal.
    */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Specify if modal has scrolling content.
    * */
    scrolls?: boolean;
    /**
     * custom on click event function
    * */
    onClick?: (...params: any) => any;
}
declare const Modal: ({ actionButtonLabel, ariaLabel, children, classes, closeButtonLabel, heading, isAlert, id, isOpen, isWarning, onAction, onClose, onKeyDown, persistent, size, scrolls, }: ModalProps) => React.JSX.Element;
export default Modal;

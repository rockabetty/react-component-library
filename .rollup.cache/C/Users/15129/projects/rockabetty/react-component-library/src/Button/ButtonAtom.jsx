import React from 'react';
import classNames from 'classnames';
import '../design/style.css';
import './Button.css';
const ButtonAtom = ({ id = '', look, children, disabled = false, loading, onClick = () => { }, role = "button", tabIndex, type = "button", inline = false, classes = '', inverse = false }) => {
    return (<button id={id} disabled={disabled} onClick={(e) => { onClick(e); }} className={`button DisplayText ${classes} ${classNames({
            'Disabled': !!disabled,
            'Muted': look === 'muted',
            'Primary': look === 'primary',
            'Warning': look === 'warning',
            'Inline': !!inline,
            'Inverse': !!inverse
        })}`.trim()} role={role} tabIndex={tabIndex} type={type}>
      {loading ? "..." : children}
    </button>);
};
export default ButtonAtom;
//# sourceMappingURL=ButtonAtom.jsx.map
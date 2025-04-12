import React from 'react';
import classNames from 'classnames';
import '../design/style.css';
import './Link.css';
import '../Button/Button.css';
const Link = ({ id = '', children = 'Link', href = '#', target = '_self', disabled, type, onClick, look = 'default', inverse = false }) => {
    return (<a id={id} href={href} target={target} className={classNames({
            'Inverse': !!inverse,
            'Navigation': type === 'navigation',
            'Disabled': !!disabled,
            'button': type === 'button',
            'Muted': type === 'button' && look === 'muted',
            'Primary': type === 'button' && look === 'primary',
            'Warning': type === 'button' && look === 'warning',
            'link': type !== 'button',
            'Inline': type === 'button'
        })} onClick={onClick}>
      {children}
    </a>);
};
export default Link;
//# sourceMappingURL=Link.jsx.map
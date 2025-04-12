import React from 'react';
import ButtonAtom from '../ButtonAtom';
import classNames from 'classnames';
import Icon from '../../Icon';
import '../../design/style.css';
import './Badge.css';
const Badge = ({ id = '', viewbox = "0 0 16 16", look = "default", disabled, onClick = () => { }, tabIndex, icon = 'close', label, size = 'md', width = undefined, height = undefined, showLabel = false }) => {
    let iconWidth, iconHeight = 24;
    if (size === 'lg') {
        iconWidth = 32;
        iconHeight = 32;
    }
    if (size === 'sm') {
        iconWidth = 16;
        iconHeight = 16;
    }
    if (height) {
        iconHeight = height;
    }
    if (width) {
        iconWidth = width;
    }
    return (<ButtonAtom id={id} disabled={disabled} onClick={(e) => { onClick(e); }} classes={classNames({
            'Badge': true,
            'Labeled': showLabel === true
        })} look={look} role='button' tabIndex={tabIndex} type='button'>
      <Icon name={icon} title={label} width={iconWidth} height={iconHeight} viewbox={viewbox}/>
      <span className={showLabel ? 'button-label' : 'Invisible'}>{label}</span>
    </ButtonAtom>);
};
export default Badge;
//# sourceMappingURL=Badge.jsx.map
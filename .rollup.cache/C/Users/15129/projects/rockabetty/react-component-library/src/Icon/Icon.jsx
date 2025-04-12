import React from 'react';
import '../design/style.css';
import './Icon.css';
import navigation from './paths/navigation';
import operation from './paths/operation';
import information from './paths/information';
const Icon = ({ id = '', classes = '', name = '', viewbox = '0 0 16 16', title, width = 16, height = 16, disabled, }) => {
    const paths = Object.assign(Object.assign(Object.assign({}, operation), navigation), information);
    let opts = {};
    const svg = paths[name];
    if (svg.fillRule) {
        opts['fillRule'] = svg.fillRule;
    }
    if (svg.clipRule) {
        opts['clipRule'] = svg.clipRule;
    }
    if (svg.d) {
        opts['d'] = svg.d;
    }
    return (<>
      <svg id={id} className={`icon ${classes} ${disabled ? 'Disabled' : ''}`.trim()} version="1.1" height={`${height}px`} width={`${width}px`} xmlns="http://www.w3.org/2000/svg" viewBox={viewbox}>
        <title>{title || `${name} icon`}</title>
        <path {...opts}></path>
      </svg>
    </>);
};
export default Icon;
//# sourceMappingURL=Icon.jsx.map
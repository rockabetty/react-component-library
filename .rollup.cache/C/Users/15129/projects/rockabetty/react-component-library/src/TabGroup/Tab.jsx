import React from 'react';
import './TabGroup.css';
import classNames from 'classnames';
const Tab = function (props) {
    const { id, labelText, isActive, onClick, disabled } = props;
    return (<button id={id} type="button" onClick={onClick} className={classNames({
            'tabgroup_tab': true,
            'Active': !!isActive,
            'Disabled': !!disabled
        })}>
      {labelText}
    </button>);
};
export default Tab;
//# sourceMappingURL=Tab.jsx.map
import React, { useState } from 'react';
import Badge from './../Button/Badge';
import '../design/style.css';
import './Accordion.css';
const Accordion = ({ id = '', children, defaultOpen = false, isOpen: isOpenedByParent, onToggle = undefined, title = "" }) => {
    const [isOpenedBySelf, setisOpenedBySelf] = useState(defaultOpen);
    const isControlledComponent = isOpenedByParent !== undefined;
    const isOpen = isControlledComponent ? isOpenedByParent : isOpenedBySelf;
    const toggleOpen = () => {
        const newIsOpen = !isOpen;
        if (!isControlledComponent) {
            setisOpenedBySelf(newIsOpen);
        }
        if (onToggle) {
            onToggle(newIsOpen);
        }
    };
    return (<div className='accordion' id={id}>
      <div className="accordion_heading">
        <span className="accordion_title">
          {title}
        </span>
        <Badge look="muted" height={16} width={16} viewbox="0 0 16 9" icon={isOpen ? 'arrowUp' : 'arrowDown'} onClick={toggleOpen}/>
      </div>

      <div className={`accordion_body ${isOpen === true ? "Open" : "Closed"}`}>
        {children}
      </div>
    </div>);
};
export default Accordion;
//# sourceMappingURL=Accordion.jsx.map
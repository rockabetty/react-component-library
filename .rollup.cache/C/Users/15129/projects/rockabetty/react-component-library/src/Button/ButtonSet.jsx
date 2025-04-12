import React from 'react';
import './Button.css';
const Button = ({ id = "", children }) => {
    return (<div id={id} className='buttonset'>
      {children}
    </div>);
};
export default Button;
//# sourceMappingURL=ButtonSet.jsx.map
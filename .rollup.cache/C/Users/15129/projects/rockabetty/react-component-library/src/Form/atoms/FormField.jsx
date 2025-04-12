import React from 'react';
import classNames from 'classnames';
import '../../design/style.css';
import '../Form.css';
const FormField = ({ children, classes = '', disabled, hasError, }) => {
    return (<div className={`form-field ${classes} ${classNames({
            'Disabled': disabled,
            'Error': hasError
        })}`.trim()}>
      {children}
    </div>);
};
export default FormField;
//# sourceMappingURL=FormField.jsx.map
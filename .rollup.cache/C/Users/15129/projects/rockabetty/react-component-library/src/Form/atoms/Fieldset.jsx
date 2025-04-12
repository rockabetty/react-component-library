import React from 'react';
import '../../design/style.css';
import '../Form.css';
const FieldSet = ({ children, legend = '' }) => {
    return (<fieldset className="fieldset">
      <legend>{legend}</legend>
      {children}
    </fieldset>);
};
export default FieldSet;
//# sourceMappingURL=Fieldset.jsx.map
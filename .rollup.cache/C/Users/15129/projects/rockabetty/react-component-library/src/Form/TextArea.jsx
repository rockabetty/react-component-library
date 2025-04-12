import React from 'react';
import WriteInField, { writeInDefaults } from './atoms/WriteInField';
const TextArea = (props) => {
    return (<WriteInField {...props} type="textarea"/>);
};
TextArea.defaultProps = writeInDefaults;
export default TextArea;
//# sourceMappingURL=TextArea.jsx.map
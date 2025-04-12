import React from 'react';
import Checkbox from './Checkbox';
export default {
    title: 'Form Components/Checkbox',
    component: Checkbox,
    argTypes: {
        checked: {
            control: { type: 'boolean' }
        }
    }
};
const Template = (args) => <Checkbox {...args}/>;
let isChecked = false;
const handleChange = function () {
    isChecked = !isChecked;
};
export const Default = Template.bind({});
Default.args = {
    id: "example-id",
    labelText: "Label",
    helperText: "Optional helper text goes here.",
    defaultValue: "Default Value",
    type: "password",
    checked: isChecked,
    onChange: handleChange
};
//# sourceMappingURL=Checkbox.stories.jsx.map
import React from 'react';
import TextInput from './TextInput';
export default {
    title: 'Form Components/TextInput',
    component: TextInput,
    argTypes: {
        defaultValue: {
            control: { type: 'text' }
        },
        type: {
            control: { type: 'select' }
        }
    }
};
const Template = (args) => <TextInput {...args}/>;
export const Default = Template.bind({});
Default.args = {
    id: "example-id",
    labelText: "Form Field",
    helperText: "Optional helper text goes here.",
    defaultValue: "Default Value",
    type: "text",
    value: "Jimbo"
};
//# sourceMappingURL=TextInput.stories.jsx.map
import React from 'react';
import Badge from './Badge';
export default {
    title: 'General/Buttons/Badge',
    component: Badge,
};
const Template = (args) => <Badge {...args}/>;
export const IconOnly = Template.bind({});
IconOnly.args = {
    icon: 'doubleLeft',
    label: "Rewind",
    disabled: false,
    width: 12,
    height: 12,
    viewbox: "0 0 16 16"
};
export const IconLabel = Template.bind({});
IconLabel.args = {
    icon: 'doubleLeft',
    label: "Rewind",
    showLabel: true,
    disabled: false,
    width: 12,
    height: 12,
    viewbox: "0 0 16 16"
};
//# sourceMappingURL=Badge.stories.jsx.map
import React from 'react';
import Accordion from './Accordion';
export default {
    title: 'Components/Accordion',
    component: Accordion,
};
const Template = (args) => <Accordion {...args}/>;
export const Default = Template.bind({});
Default.args = {
    title: "Accordion",
    children: <p>Lorem ipsum sit dolor amet</p>
};
//# sourceMappingURL=Accordion.stories.jsx.map
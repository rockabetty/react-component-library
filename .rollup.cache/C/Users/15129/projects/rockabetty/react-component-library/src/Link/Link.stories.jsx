import React from 'react';
import Link from './Link';
export default {
    title: 'General/Links',
    component: Link,
};
const Template = (args) => <Link {...args}/>;
const InlineTemplate = (args) => (<p>hamburgefonstiv handgloves <Link {...args}/> hamburgefontsiv
  </p>);
export const DefaultLink = InlineTemplate.bind({});
DefaultLink.args = {
    href: "#",
    children: "click me!"
};
export const NavLink = Template.bind({});
NavLink.args = {
    href: "#",
    type: "navigation",
    children: "click me!"
};
export const ButtonLink = Template.bind({});
ButtonLink.args = {
    href: "#",
    type: "button",
    children: "click me!"
};
//# sourceMappingURL=Link.stories.jsx.map
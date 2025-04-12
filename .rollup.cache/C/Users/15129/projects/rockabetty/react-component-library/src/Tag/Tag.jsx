import React from 'react';
import classNames from 'classnames';
import '../design/style.css';
import './Tag.css';
import { Badge } from '../Button';
import { InteractiveDefaults } from '../types/interactive';
;
export const TagDefaults = Object.assign(Object.assign({}, InteractiveDefaults), { label: '', size: 'md', onClose: () => { }, removable: false, icon: '', look: 'neutral' });
const Tag = (props) => {
    const { id, removable, label, classes } = props;
    return (<div id={id} className={`tag ${classNames({
            Removable: !!removable
        })}`}>
        <span>{label}</span>
        {removable
            ? (<Badge label="remove" look="muted" icon="close" width={10} height={10}/>)
            : null}
      </div>);
};
export default Tag;
//# sourceMappingURL=Tag.jsx.map
import React from 'react';
import { InteractiveProps } from '../types/interactive';
import './TabGroup.css';
export interface TabProps extends InteractiveProps {
    labelText: string;
    isActive: boolean;
}
declare const Tab: (props: any) => React.JSX.Element;
export default Tab;

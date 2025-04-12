import React from "react";
import { UniversalProps } from "../types/universal";
import "./TabGroup.css";
interface TabMeta extends UniversalProps {
    key: string;
    name: string;
    disabled?: boolean;
}
interface TabContentMap {
    [key: string]: React.ReactNode;
}
export interface TabGroupProps extends UniversalProps {
    tabs: TabMeta[];
    content: TabContentMap;
    initialTabKey?: string;
}
declare const TabGroup: React.FC<TabGroupProps>;
export default TabGroup;

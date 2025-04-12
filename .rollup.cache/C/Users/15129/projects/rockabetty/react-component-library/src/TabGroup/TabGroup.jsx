import React, { useState, useMemo } from "react";
import Tab from "./Tab";
import "./TabGroup.css";
const TabGroup = ({ id, tabs, content, initialTabKey }) => {
    const initialActiveTabKey = initialTabKey || tabs[0].key;
    const [activeTabKey, setActiveTabKey] = useState(initialActiveTabKey);
    const updateTab = (key) => {
        setActiveTabKey(key);
    };
    const activeTabContent = useMemo(() => content[activeTabKey], [content, activeTabKey]);
    return (<div className="tabgroup" id={id}>
      <div className="tabgroup_tab-selection">
        {tabs.map((tab) => (<Tab id={tab.id} key={`tab-${tab.key}`} labelText={tab.name} isActive={activeTabKey === tab.key} onClick={() => updateTab(tab.key)} disabled={tab.disabled}/>))}
      </div>

      <div className="tabgroup_content">{activeTabContent}</div>
    </div>);
};
export default TabGroup;
//# sourceMappingURL=TabGroup.jsx.map
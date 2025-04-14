import React from "react";
import "./FieldGroup.css";
import classNames from "classnames";

interface FieldGroupProps {
  children: React.ReactNode;
  inline?: boolean;
  gap?: 'sm' | 'md' | 'lg';
}

const FieldGroup: React.FC<FieldGroupProps> = ({ children, inline = false, gap = 'md' }) => {
  return (
    <div 
      className={classNames(
        'field-group',
        { 'Inline': inline },
        `Gap-${gap}`
      )}
    >
      {children}
    </div>
  );
};

export default FieldGroup
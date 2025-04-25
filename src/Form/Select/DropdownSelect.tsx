import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "../../design/style.css";
import "../Form.css";
import FormField from "../atoms/FormField";
import { InputProps } from "../../types/input";
import { default as Label } from "../atoms/Label";
import { WidthSize } from "../atoms/WriteInField";

type Option = {
  value: string;
  labelText: string;
  disabled?: boolean;
  onClick?: () => void;
};

export interface SelectProps extends InputProps {
  options: Option[];
  multiple?: boolean;
  size: WidthSize;
  onMultiChange?: (selectedValues: string[]) => void;
}

const DropdownSelect = (props: SelectProps) => {
  const {
    placeholderText,
    disabled,
    id,
    name,
    onChange,
    onMultiChange,
    tabIndex,
    value,
    labelText,
    options,
    helperText,
    errorText,
    multiple,
    size,
    status,
  } = props;

  const [selectedValues, setSelectedValues] = useState<string[]>(
    multiple && value ? (Array.isArray(value) ? value : [value]) : [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value,
    );

    if (multiple) {
      setSelectedValues(selectedOptions);
      if (onMultiChange) {
        onMultiChange(selectedOptions);
      }
    } else {
      if (onChange) {
        onChange(e);
      }
    }
  };

  const computedValue = multiple ? selectedValues : value;

  return (
    <FormField
      classes={classNames({
        Compact: true,
        Disabled: disabled,
        Error: status === "error",
        [`FieldWidth-${size || "full"}`]: true,
      })}
    >
      <Label labelText={labelText} />
      <select
        className={`form-field_control ${classNames({
          Valid: status === "valid",
          Error: status === "error",
        })}`.trim()}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        tabIndex={tabIndex}
        value={computedValue}
        multiple={multiple}
        {...(multiple ? { size: Math.min(options.length, 5) } : {})} // Optional: show multiple options for multiselect
      >
        {placeholderText && !multiple && (
          <option disabled value="">
            {placeholderText}
          </option>
        )}
        {options.map((option, idx) => (
          <option
            key={`dropdown-select-${idx}`}
            className="form-field_option"
            value={option.value}
            label={option.labelText}
            disabled={option.disabled}
            onClick={option.onClick}
          >
            {option.labelText}
          </option>
        ))}
      </select>
      {helperText || status === "error" ? (
        <p className="form-field_helpertext">
          {status === "error" ? errorText : helperText}
        </p>
      ) : null}
    </FormField>
  );
};

export default DropdownSelect;

import { InteractiveDefaults } from './interactive';
export const InputDefaults = Object.assign(Object.assign({}, InteractiveDefaults), { labelText: "", ariaLabel: "", ariaLabelledby: "", hasError: false, isValid: false, name: "", 
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => { }, refer: null, required: false, value: undefined });
//# sourceMappingURL=input.js.map
type ValidationOptions = {
    value?: string | number;
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
};
export declare const useValidation: (options: ValidationOptions) => {
    valid: boolean;
    setValid: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    error: string;
    setError: import("react").Dispatch<import("react").SetStateAction<string>>;
    validate: () => string;
};
export {};

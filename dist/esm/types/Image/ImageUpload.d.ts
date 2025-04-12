import React from 'react';
import './Image.css';
import '../Form/Form.css';
export interface ImageUploadProps {
    id?: string;
    alt?: string;
    src?: string;
    maxSize?: number;
    editable?: boolean;
    helperText?: string;
    errorText?: string;
    labelText?: string;
    required?: boolean;
    flexible?: boolean;
    name?: string;
    onChange?: (files: FileList | null) => void;
}
declare const ImageUpload: ({ id, src, alt, labelText, maxSize, editable, errorText, helperText, required, flexible, name, onChange, }: ImageUploadProps) => React.JSX.Element;
export default ImageUpload;

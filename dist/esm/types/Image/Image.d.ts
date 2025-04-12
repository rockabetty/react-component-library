import React from 'react';
import './Image.css';
export interface ImageProps {
    id?: string;
    alt?: string;
    src?: string;
    width?: number | "100%";
    height?: number | "100%";
    flexible?: boolean;
}
declare const Image: ({ id, src, alt, width, height, flexible, }: ImageProps) => React.JSX.Element;
export default Image;

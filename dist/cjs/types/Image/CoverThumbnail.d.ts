import React from 'react';
import './Image.css';
export interface CoverThumbnailProps {
    id?: string;
    alt?: string;
    src?: string;
    width?: number;
    height?: number;
    flexible?: boolean;
    size: 'small' | 'medium' | 'large';
    title: string;
    rating: string;
}
declare const CoverThumbnail: React.FC<CoverThumbnailProps>;
export default CoverThumbnail;

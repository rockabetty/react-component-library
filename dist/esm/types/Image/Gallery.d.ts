import React from "react";
import "./Gallery.css";
type GalleryProps = {
    thumbnails: {
        id: number;
        imageUrl: string;
        title?: string;
        altText?: string;
    }[];
};
declare const Gallery: React.FC<GalleryProps>;
export default Gallery;

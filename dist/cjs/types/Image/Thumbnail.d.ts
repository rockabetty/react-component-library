import React from "react";
import "./Thumbnail.css";
type ThumbnailProps = {
    src: string;
    title: string;
    altText: string;
    link: string;
};
declare const Thumbnail: React.FC<ThumbnailProps>;
export default Thumbnail;

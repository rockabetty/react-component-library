import React from "react";
import Thumbnail from "./Thumbnail";
import "./Gallery.css";
import { Badge } from "../Button";
console.log(Badge);
const Gallery = ({ thumbnails, }) => {
    return (<div className="gallery">
      {thumbnails === null || thumbnails === void 0 ? void 0 : thumbnails.map((thumbnail) => (<Thumbnail key={thumbnail.id} src={thumbnail.imageUrl} title={thumbnail.title} altText={thumbnail.altText} id={thumbnail.id} link={thumbnail.link}/>))}
    </div>);
};
export default Gallery;
//# sourceMappingURL=Gallery.jsx.map
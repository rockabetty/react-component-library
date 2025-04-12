import React from "react";
import "./Thumbnail.css";
const Thumbnail = ({ src, title, altText, link }) => {
    const thumbnail = (<div className="thumbnail gallery_tile">
      <img src={src} alt={altText} loading="lazy"/>
      {title ? <div className="thumbnail_info">{title}</div> : null}
      <div className="gallery_buttons"></div>
    </div>);
    if (link) {
        return (<a href={link}>
        {thumbnail}
      </a>);
    }
    return thumbnail;
};
export default Thumbnail;
//# sourceMappingURL=Thumbnail.jsx.map
import React from 'react';
import classNames from 'classnames';
import './Image.css';
const CoverThumbnail = ({ id = "", src = "", alt = "", width, height, size = 'small', title = "", flexible = false, rating = "" }) => {
    return (<div id={id} className='gallery_tile'>
      <div className={classNames({
            "image": true,
            "CoverImage": true,
            "Small": size === "small",
            "Large": size === "large",
            "Medium": size === "medium"
        })}>
        <img src={src} alt={alt} width={width} height={height} className="image_image"/>
      </div>
      <div>
        <span>{title}</span>
        <span>{rating}</span>
      </div>
    </div>);
};
export default CoverThumbnail;
//# sourceMappingURL=CoverThumbnail.jsx.map
import React from 'react';
import classNames from 'classnames';
import './Image.css';
const Image = ({ id = "", src = "", alt = "", width, height, flexible = false, }) => {
    return (<div id={id} className={classNames({
            "image": true,
            "Flexible": flexible
        })}>
      <img src={src} alt={alt} width={width} height={height} className="image_image"/>
    </div>);
};
export default Image;
//# sourceMappingURL=Image.jsx.map
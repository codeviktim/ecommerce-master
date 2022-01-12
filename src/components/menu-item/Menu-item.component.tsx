import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({title, imageUrl,size}:{title:string, imageUrl:string,size:string}) => (
    <div 
       style={{
           backgroundImage : `url(${imageUrl})`
       }} 
       className = {`${size} menu-item`}>
      <div className="content">
          <h1 className="title">
              {title}
          </h1>
          <span className="subtitlte">
          SHOP NOW
      </span>
      </div>
    </div>
)
export default MenuItem;
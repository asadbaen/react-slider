import React from "react";
import "./grid.styles.css";
const Grid = () => {
  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        <div className="grid-item-1 grid-item">
          <div className="item-inner">
            <img
              src="http://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid-item-2 grid-item">
          <div className="item-inner">
            <img
              src="https://images.moviesanywhere.com/6305a9e8ed76d5fa485ac16637655cf7/bcc68be4-eede-409b-a63d-e179b28d19b4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid-item-3 grid-item">
          <div className="item-inner">
            <img
              src="https://fanart.tv/fanart/movies/12230/movieposter/101-dalmatians-5a529ef29b36c.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid-item-4 grid-item">
          <div className="item-inner">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81PWF-yAEyL._AC_SL1100_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;

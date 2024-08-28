/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-main">
        <div className="item-container">
          <Link to={`/product/${props.id}`}>
            <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
          </Link>
          <div className="item-info">
            <p className="text">{props.text}</p>
            <p>{props.name}</p>
            <div className="item-prices">
              <div className="item-price-new">${props.new_price}</div>
              <div className="item-price-old">${props.old_price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

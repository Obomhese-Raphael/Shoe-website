// import React from 'react'
import "./CSS/New.css";
import new_banner from "../assets/new_banner (2).jpg";
import Item from "../Components/Items/Items";
import filter_icon from "../assets/filter_icon.jpg";
import arrow_down from "../assets/dropdown_icon (2).png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import new_collections from "../Components/Assets/new_collection";

const New = () => {
  const { searchResults } = useContext(ShopContext);
  console.log(searchResults)

  return (
    <div className="new">
      <div className="new-container">
        <img className="new-banner" src={new_banner} alt="" />
        <h2 className="new-header">NEW COLLECTIONS</h2>
        <div className="filter-container">
          <div className="left">
            <p>NEW RELEASES ( 2000 )</p>
          </div>
          <div className="right">
            <div className="left2">
              <p>Hide Filters</p>
              <img className="filter-icon" src={filter_icon} alt="" />
            </div>
            <div className="right2">
              <p>Sort by</p>
              <img className="arrow-icon" src={arrow_down} alt="" />
            </div>
          </div>
        </div>
        <div className="collections">
          {searchResults?.length > 0
            ? searchResults.map((item, i) => {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    text={item.text}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              })
            : new_collections.map((item, i) => {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    text={item.text}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              })}
        </div>
        <div className="explore-more">
          <button className="exp-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default New;

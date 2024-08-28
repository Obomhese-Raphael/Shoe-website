/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import arrow_icon from "../../assets/dropdown_icon (2).png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1> {product.name} </h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Boost your speed with this carbon fiber-plated shoe! It offers a
          variety of sizes for a perfect fit, all at an accessible price.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="btns">
          <button
            className="cart-btn"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <button>FAVORITES</button>
        </div>
        <div className="productdetails">
          <p className="p">SHIPPING & RETURNS</p>{" "}
          <img src={arrow_icon} className="drop-icon" alt="" />
        </div>
        <hr className="hr" />
        <div className="productdetails">
          <p className="p">REVIEWS</p>{" "}
          <img src={arrow_icon} className="drop-icon" alt="" />
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default ProductDisplay;

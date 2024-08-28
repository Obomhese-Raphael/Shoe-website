import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, new_collections, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p className="products">Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p className="totals">Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {new_collections.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} className="cartIcon-product-icon" alt="" />
                <p className="name">{e.name}</p>
                <p className="new_price">$ {e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartItems-remove-icon"
                  src={remove_icon}
                  alt="remove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item"> 
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder="promo code" />
            <button className="submit">Submit</button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CartItems;

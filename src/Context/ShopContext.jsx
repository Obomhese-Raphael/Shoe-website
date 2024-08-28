// /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import new_collections from "../Components/Assets/new_collection";

export const ShopContext = createContext({ new_collections });

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < new_collections.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const updateSearchResults = (newSearchResults) => {
    setSearchResults(newSearchResults);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        console.log(item);
        let itemInfo = new_collections.find((product) =>
          product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    new_collections,
    cartItems,
    addToCart,
    removeFromCart,
    searchResults,
    updateSearchResults,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

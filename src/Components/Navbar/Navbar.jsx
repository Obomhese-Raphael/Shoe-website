import "./Navbar.css";
import nike_logo from "../../assets/logo(2).webp";
import love_img from "../../assets/love-img(2).png";
import love_filled_icon from "../../assets/love-filled-icon (5).png";
import cart_img from "../../assets/cart_icon (2).png";
import cart_img_2 from "../../assets/cart_icon (4).png"
import search_img from "../../assets/search-img.png";
import search_img_2 from "../../assets/search-img (2).webp";
import dropdown_icon from "../../assets/hamburger_icon.webp";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import new_collections from "../Assets/new_collection";

const Navbar = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const context = useContext(ShopContext);

  const handleSearch = () => {
    const searchResults = new_collections.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(searchResults);
    context.updateSearchResults(searchResults);
  };

  useEffect(() => {
    setSearchResults(searchResults);
    console.log(searchResults);
  }, [searchResults]);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-left-item">
          <img src={nike_logo} className="logo" />
        </div>
        <div
          className={mobileMenu ? "hide-mobile-menu" : "navbar-center-items"}
        >
          <ul className="ul">
            <li>
              <a href="">
                <Link onClick={window.scrollTo(0, 0)} to="/">
                  Shop
                </Link>
              </a>
            </li>
            <li>
              <a href="">
                <Link onClick={window.scrollTo(0, 0)} to="/new">
                  New & Featured
                </Link>
              </a>
            </li>
            <li>
              <a href="">
                <Link
                  onClick={window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                  to="/mens"
                >
                  Mens
                </Link>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <Link
                  onClick={window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                  to="/womens"
                >
                  Womens
                </Link>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <Link
                  onClick={window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                  to="/kids"
                >
                  Kids
                </Link>{" "}
              </a>
            </li>
            <li className="sign-up">
              <a href="">
                <Link
                  onClick={window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                  to="/signup"
                >
                  Signup
                </Link>{" "}
              </a>
            </li>
            <li>
              <img src={search_img} className="dropdown-search-img" />
            </li>
          </ul>
        </div>
        <div className="navbar-right-items">
          <input
            className="input"
            type="text"
            placeholder="Search"
            autoComplete="on"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={search_img} className="search-img" onClick={handleSearch} />
          <img
            src={isFilled ? love_filled_icon : love_img}
            className="love-img"
            alt="Love"
            onClick={handleClick}
          />
          <Link to="./cart">
            <img src={cart_img} className="cart-img" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <img src={search_img} className="search_icon" alt="" />
        <img
          src={dropdown_icon}
          className="menu_icon dropdown_menu"
          onClick={toggleMenu}
        />
        <input
          className="input dropdown_input"
          type="text"
          placeholder="Search"
          autoComplete="on"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="./cart" className="menu_icon">
          <img
            src={cart_img_2}
            alt="cart-icon"
            className="menu_icon dropdown_cart"
          />
        </Link>
        <div className="nav-cart-count dropdown_count">
          {getTotalCartItems()}
        </div>
        <img
          src={search_img_2}
          className="menu_icon dropdown_menu dropdown_search"
          alt="search-icon"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;

/* eslint-disable react/prop-types */
import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  return (
    <div className="shop-category">
      <div className="banner-category">
        <img src={props.banner} alt="" className="banner" />
      </div>
      <div className="shopcategory-indexSort">
        <h1 className="win">WIN ON AIR</h1>
        <p className="gen">
          Meet the next generation of Nike Air. Engineered to the exact <br />
          specifications of champion athletes
        </p>
        <div className="btns">
          <button>Experience Air</button>
          <button>Shop Air</button>
        </div>
        <div>{props.page}</div>
      </div>
      <div className="footer-row">{props.footer_row}</div>
    </div>
  );
};

export default ShopCategory;

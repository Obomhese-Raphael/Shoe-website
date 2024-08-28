/* eslint-disable react/prop-types */
import "./Breadcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;
  const capitalizedProductName = product.name.toUpperCase();

  return (
    <div className="breadcrum">
      <p>
        <Link to="/" className="link">
          {" "}
          HOME
        </Link>{" "}
        <img src={arrow_icon} alt="" />{" "}
        <Link className="link" to="/new">
          {" "}
          NEW & FEATURED
        </Link>{" "}
        <img src={arrow_icon} alt="" /> {capitalizedProductName}
      </p>
    </div>
  );
};

export default Breadcrum;

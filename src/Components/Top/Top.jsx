import "./Top.css";
import converse_logo from "../../assets/converse-logo (2).png";
import jordan_logo from "../../assets/jordan-logo (5).svg";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top">
      <div className="top-items">
        <div className="top-left-items">
          <img src={jordan_logo} className="jordan-logo" />
          <img src={converse_logo} className="converse-logo" />
        </div>
        <div className="top-right-items">
          <ul>
            <li>
              <Link to="/" replace reloadDocument>
                Home
              </Link>
            </li>
            <li>
              <a href="https://www.nike.com/retail">Find a Store</a>
            </li>
            <li>
              <a href="https://www.nike.com/help">Help</a>
            </li>
            <li>
              <a href="https://www.nike.com/membership">Join Us</a>
            </li>
            <li className="signup">
              <Link to="/signup" replace reloadDocument>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Top;

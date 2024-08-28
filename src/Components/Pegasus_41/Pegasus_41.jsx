import "./Pegasus_41.css";
import img_1 from "../../assets/img-1.jpg";
import img_2 from "../../assets/img-2.jpg";
import img_3 from "../../assets/img-3.jpg";
import img_4 from "../../assets/img-4.jpg";
import image_roll from "../../assets/img-5.jpg";
import { Link } from "react-router-dom";

const Pegasus_41 = () => {
  return (
    <div className="pegasus">
      <div className="head-section">
        <h1>NIKE PEGASUS 41</h1>
        <p>
          Experience the responsive energy return of Air Zoom and <br /> all-new
          ReactX foam.
        </p>
        <button className="shop-btn">Shop</button>
      </div>
      <div className="bottom-section">
        <div className="images">
          <div className="img-a">
            <img src={img_1} className="img-1" />
          </div>
          <div className="img-b">
            <img src={img_2} className="img-2" />
          </div>
          <div className="img-c">
            <img src={img_3} className="img-3" />
          </div>
          <div className="img-d">
            <img src={img_4} className="img-4" />
          </div>
        </div>
      </div>
      <div className="other-section">
        <h2>NEW THIS WEEK</h2>
        <button className="shop-btn">
          <Link to="/new">Shop New Arrivals</Link>
        </button>
      </div>
      <div className="other-bottom-section">
        <img src={image_roll} className="img-roll" />
      </div>
    </div>
  );
};

export default Pegasus_41;

import "./Membership.css";
import img_6 from "../../assets/img-6.jpg";
import img_7 from "../../assets/img-7.jpg";
import img_8 from "../../assets/img-8.jpg";

const Membership = () => {
  return (
    <div className="membership-container head-section">
      <h1 className="header">NIKE MEMBERSHIP</h1>
      <div className="programs">
        <div className="program">
          <img src={img_6} alt="" />
          <div className="caption">
            <p className="p">Member Product</p> <br />
            <p className="p2">Your Exclusive Access</p>
            <button>Shop</button>
          </div>
        </div>  
        <div className="program">
          <img src={img_7} alt="" />
          <div className="caption">
            <p className="p">Sport & Wellness App</p> <br />
            <p className="p2">Movement at where you are</p>
            <button>Move</button>  
          </div>
        </div>
        <div className="program">
          <img src={img_8} alt="" />
          <div className="caption">
            <p className="p">Nike By You</p> <br />
            <p className="p2">Your Customization service</p>
            <button>Customize</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

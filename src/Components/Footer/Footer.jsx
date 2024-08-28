import "./Footer.css";
import globe_logo from "../../assets/globe-logo.jpg";
import privacy_logo from "../../assets/privacy-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <hr />
        <div className="top-footer">
          <div className="section1">
            <h4>Resources</h4>
            <p>Gift Cards</p>
            <p>Find a Store</p>
            <p>Become a Member</p>
            <p>Nike x NBA</p>
            <p>Nike Journal</p>
            <p>Site Feedback</p>
          </div>

          <div className="section2">
            <h4>Help</h4>
            <p>Get Help</p>
            <p>Order Status</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
            <p>Order Cancellation</p>
            <p>Payment Options</p>
            <p>Gift Card Balance</p>
            <p>Contact Us</p>
          </div>

          <div className="section3">
            <h4>Company </h4>
            <p>About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Purpose</p>
            <p>Sustainability</p>
          </div>

          <div className="section4">
            <h4>Promotions & Discounts</h4>
            <p>Student</p>
            <p>Military</p>
            <p>Teacher</p>
            <p>First Responders & Medical Professionals</p>
            <p>Birthdays</p>
          </div>

          <div className="section5">
            <img className="globe" src={globe_logo} alt="" />
            <p>United States</p>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="ul">
            <ul>
              <li>
                <p>&copy; 2024 Nike, Inc. All Rights Reserved</p>
              </li>
              <li>
                <p>Guide</p>
              </li>
              <li>
                <p>Terms of Sale</p>
              </li>
              <li>
                <p>Terms of Use</p>
              </li>
              <li>
                <p>Nike Privacy Policy</p>
              </li>
              <div className="flex">
                <img src={privacy_logo} alt="" />
                <li>
                  <p>Your Privacy Choices</p>
                </li>
              </div>
              <li>
                <p>CA Supply Chain Act</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

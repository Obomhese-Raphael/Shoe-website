import "./CSS/Mens.css";
import left_image from "../assets/men-s-shoes-clothing-accessories (1).jpg";
import right_image from "../assets/men-s-shoes-clothing-accessories (2).jpg";
import second_left_image from "../assets/men-s-shoes-clothing-accessories (3).jpg";
import second_right_image from "../assets/men-s-shoes-clothing-accessories (4).jpg";
import essential_first_image from "../assets/men-s-shoes-clothing-accessories (5).jpg";
import essential_second_image from "../assets/men-s-shoes-clothing-accessories (6).jpg";
import essential_third_image from "../assets/men-s-shoes-clothing-accessories (7).jpg";
import men_wide from "../assets/men-wide.jpg"
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel";

const Mens = () => {
  return (
    <div className="men-container">
      <p className="men">Explore Sport</p>
      <div className="programs programs-2 men-explore">
        <div className="program">
          <img src={left_image} className="left-img" alt="Mmbappe Image" />
          <div className="caption">
            <p className="p">Classic Kicks</p>
            <h2>The Vomero 5 & More</h2>
            <button>Shop</button>
          </div>
        </div>
        <div className="program">
          <img src={right_image} className="right-img" alt="" />
          <div className="caption">
            <p className="p">Basketball Latest</p>
            <h2>Giannis Freak 6</h2>
            <button>Shop</button>
          </div>
        </div>
      </div>

      <div className="trending-container">
        <p className="men">Trending</p>
        <div className="programs men-trending">
          <div className="program">
            <img src={second_left_image} className="second-left-img" alt="" />
            <div className="caption">
              <p className="p">Back to School</p>
              <h2>Bigger Goals Mean Better Gear</h2>
              <button>Shop</button>
            </div>
          </div>
          <div className="program">
            <img src={second_right_image} className="second-right-img" alt="" />
            <div className="caption caption_2">
              <p className="p">New in Nike Soccer</p>
              <h2 className="">Mad Ambition Pack</h2>
              <button>Shop</button>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-container">
        <img src={men_wide} alt="" />
      </div>

      <div className="essential-container">
        <p className="men essential">Shop the Essentials</p>
        <div className="men-programs">
          <div className="program">
            <img src={essential_first_image} alt="" />
            <p className="under_name">Shoes</p>
          </div>
          <div className="program">
            <img src={essential_second_image} alt="" />
            <p className="under_name">Accessories</p>
          </div>
          <div className="program">
            <img src={essential_third_image} alt="" />
            <p className="under_name">Clothings</p>
          </div>
        </div>
      </div>

      <div className="classics-container">
        <h2 className="cs">Classic Spotlight</h2>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Mens;

import "./CSS/Kids.css";
import left_image from "../assets/nike-kids-shoes-clothing-and-accessories-nike-com.jpg";
import right_image from "../assets/nike-kids-shoes-clothing-and-accessories-nike-com (2).jpg";
import essential_first_image from "../assets/kid_5.jpg";
import essential_second_image from "../assets/kid_6.jpg";
import essential_third_image from "../assets/kid_7.jpg";
import KidsCarousel from "../Components/KidsCarousel/KidsCarousel";
import SizesCarousel from "../Components/SizesCarousel/SizesCarousel";
import MoreExplore from "../Components/MoreExplore/MoreExplore";
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel"; 
import { Link } from "react-router-dom";

const Kids = () => {
  return (
    <div className="kids-container">
      <p className="kids trending-header">Trending</p>
      <div className="programs kids-explore">
        <div className="program program_1">
          <img src={left_image} className="left-image" alt="" />
          <div className="caption">
            <p className="p">Jordans Latest</p>
            <button>
              <Link to="/new">Shop</Link>
            </button>
          </div>
        </div>
        <div className="program">
          <img src={right_image} className="right-image" alt="" />
          <div className="caption">
            <p className="p">The Best of Back to School</p>
            <button>Shop</button>
          </div>
        </div>
      </div>

      <div className="essential-container explore-here">   
        <p className="kids essential kids-header explore-header">
          Explore Here
        </p>
        <div className="kids-programs">
          <div className="program">
            <img src={essential_first_image} alt="" />
            <p className="under_name">Best Sellers</p>
            <p className="under_under">
              <a href="#" className="shop-link">
                Shop
              </a>
            </p>
          </div>
          <div className="program">
            <img src={essential_second_image} alt="" />
            <p className="under_name">Nike Fleece</p>
            <p className="under_under">
              <a href="#" className="shop-link">
                Shop
              </a>
            </p>
          </div>
          <div className="program">
            <img src={essential_third_image} alt="" />
            <p className="under_name">Nike Basketball</p>
            <p className="under_under">
              <a href="#" className="shop-link">
                Shop
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="popular-container">
        <h2 className="kids header-kids">Popular Right Now</h2>
        <KidsCarousel />
      </div>

      <div className="sizes-container">
        <h2 className="kids sizes-header">Sizes For All</h2>
        <SizesCarousel />
      </div>

      <div className="explore-container">
        <MoreExplore />
      </div>

      <div className="classics-container">
        <h2 className="kids mini-header">Mini Classics</h2>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Kids;

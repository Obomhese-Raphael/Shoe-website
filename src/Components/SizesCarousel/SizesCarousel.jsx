import "./SizesCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import essential from "../Assets/essentials";
import shoe1 from "../../assets/kid_1.jpg";
import shoe2 from "../../assets/kid_2.jpg";
import shoe3 from "../../assets/kid_3.jpg";
import shoe4 from "../../assets/kid_4.jpg";

const SizesCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log(essential[0]);

  return (
    <>
      <Carousel
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
      >
        <div className="kids-card kids-carousel">
          <img src={shoe1} alt="product-image" />
          <div className="inner-card">
            <h3>Big Kids</h3>
            <p>Explore apparel (XS - XL) and Shoes (3.5-7Y)</p>
            <button>Shop</button>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe2} alt="product-image" />
          <div className="inner-card">
            <h3>Teens</h3>
            <p>Explore apparel (XS - XL) and Shoes (3.5-7Y)</p>
            <button>Shop</button>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe3} alt="product-image" />
          <div className="inner-card">
            <h3>Small Kids</h3>
            <p>Explore apparel (XS - XL) and Shoes (3.5-7Y)</p>
            <button>Shop</button>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe4} alt="product-image" />
          <div className="inner-card">
            <h3>Toddlers</h3>
            <p>Explore apparel (XS - XL) and Shoes (3.5-7Y)</p>
            <button>Shop</button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default SizesCarousel;

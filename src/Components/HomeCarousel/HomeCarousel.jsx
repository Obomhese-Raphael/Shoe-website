import "./HomeCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shoe1 from "../../assets/air-force1.jpg";
import shoe2 from "../../assets/air-jordan.jpg";
import shoe3 from "../../assets/vomero.jpg";
import shoe4 from "../../assets/blazer.jpg";
import shoe5 from "../../assets/air-max.jpg";
import shoe6 from "../../assets/blazer.jpg";
import shoe7 from "../../assets/dunk.jpg";

const HomeCarousel = () => {
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

  return (
    <>
      <Carousel responsive={responsive}>
        <div className="card">
          <img src={shoe1} alt="product-image" />
        </div>
        <div className="card">
          <img src={shoe2} alt="product-image" />
        </div> 
        <div className="card">
          <img src={shoe3} alt="product-image" />
        </div>
        <div className="card">
          <img src={shoe4} alt="product-image" />
        </div>
        <div className="card">
          <img src={shoe5} alt="product-image" />
        </div>
        <div className="card">
          <img src={shoe6} alt="product-image" />
        </div>
        <div className="card">
          <img src={shoe7} alt="product-image" />
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;

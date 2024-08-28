import "./KidsCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shoe1 from "../../assets/kidspopular_1.jpeg";
import shoe2 from "../../assets/kidspopular_2.jpeg";
import shoe3 from "../../assets/kidspopular_3.jpeg";
import shoe4 from "../../assets/kidspopular_4.jpeg";
import shoe5 from "../../assets/kidspopular_5.jpeg";
import shoe6 from "../../assets/kidspopular_6.jpeg";
import shoe7 from "../../assets/kidspopular_7.jpeg";
import shoe8 from "../../assets/kidspopular_8.jpeg";
import shoe9 from "../../assets/kidspopular_9.jpeg";
import shoe10 from "../../assets/kidspopular_10.jpeg";

const KidsCarousel = () => {
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
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
      >
        <div className="kids-card all-container">
          <img src={shoe1} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Presto</h3>
            <p>Young girl Shoes</p>
            <h4>$70</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe2} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Blazer Low</h3>
            <p>Boys (Running) Shoes</p>
            <h4>$80</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe3} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Revolution</h3>
            <p>Big Kids Shoes</p>
            <h4>$60</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe4} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Dunk Low</h3>
            <p>Baby / Toddler Shoes</p>
            <h4>$90</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe5} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Flex Runner</h3>
            <p>Big Kids Basketball Shoes</p>
            <h4>$70</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe6} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Court Legacy</h3>
            <p>Little Kids Basketball Shoes</p>
            <h4>$70</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe7} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Pegasus</h3>
            <p>Baby Shoes</p>
            <h4>$80</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe8} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Hurucan</h3>
            <p>Big Kids Shoes</p>
            <h4>$90</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe9} alt="product-image" />
          <div className="inner-card">
            <h3>Nike Lebron</h3>
            <p>Big Kids Basketball Shoes</p>
            <h4>$120</h4>
          </div>
        </div>
        <div className="kids-card">
          <img src={shoe10} alt="product-image" />
          <div className="inner-card">
            <h3>Nike React Element 55</h3>
            <p>Big Kids Shoes</p>
            <h4>$80</h4>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default KidsCarousel;

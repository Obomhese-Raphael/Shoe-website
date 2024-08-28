import "./Home.css";
import run from "../../assets/nike-just-do-it.jpg";
import Pegasus_41 from "../Pegasus_41/Pegasus_41";
import Membership from "../Membership/Membership";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeRow from "../HomeRow/HomeRow";

const Home = () => {
  return (
    <div className="home">
      <div className="home-item">
        <img src={run} className="run-img" />
      </div>
      <Pegasus_41 />
      <Membership />
      <div className="home-carousel">
        <div className="head-section home-carousel-container">
          <h1>EXPLORE NEW PRODUCTS</h1>
          <button className="shop-btn">Shop New Arrivals</button>
        </div>
        <h2 className="by-classics">SHOP BY CLASSICS</h2>
      </div>
      <HomeCarousel />
      <HomeRow />
    </div>
  );
};

export default Home;

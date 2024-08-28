import "./HomeRow.css";

const HomeRow = () => {
  return (
    <div className="home-row">
      <div className="footer-container">
        <div className="top-footer">
          <div className="section1">
            <h4 className="h4s">Featured</h4>
            <p>Air Force 1</p>
            <p>Jordan</p>
            <p>Metcon</p>
            <p>Air Max 270</p>
          </div>

          <div className="section2">
            <h4 className="h4s">Shoes</h4>
            <p>All Shoes</p>
            <p>Jordan Shoes</p>
            <p>Running Shoes</p>
            <p>Basketball Shoes</p>
          </div>

          <div className="section3">
            <h4 className="h4s">Clothing</h4>
            <p>All Clothing</p>
            <p>Tops & T-Shirts</p>
            <p>Shorts</p>
            <p>Hoodies & Pullovers</p>
          </div>

          <div className="section4">
            <h4 className="h4s">Kids</h4>
            <p>Infants & Toddler shoes</p>
            <p>Kids Shoes</p>
            <p>Kids Basketball Shoes</p>
            <p>Kids Running Shoes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow;

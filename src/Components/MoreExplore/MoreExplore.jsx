import "./MoreExplore.css";

const MoreExplore = () => {
  return (
    <div>
      <div className="explore-container essential-container">
        <p className="kids kids-header">More to Explore</p>
        <div className="programs kids-explore">
          <div className="program">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.2,cs_srgb/h_486,c_limit/dba1b887-345d-4cd5-bfd0-e3377f5af0a4/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
              alt=""
            />
            <p className="under_name">New Arrivals</p>
            <p className="under_under">
              <a href="#" className="shop-link">
                Shop
              </a>
            </p>
          </div>
          <div className="program">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.2,cs_srgb/h_486,c_limit/367f84b9-1d06-466b-898d-1ff71f574f4c/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
              alt=""
            />
            <p className="under_name">Nike Fleece</p>
            <p className="under_under">
              <a href="#" className="shop-link">
                Shop
              </a>
            </p>
          </div>
          <div className="program">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.2,cs_srgb/h_486,c_limit/6dec4d1e-0a26-4652-b637-602fcbff35ce/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
              alt=""
            />
            <p className="under_name">Nike Basketball</p>
            <p className="under_under">
              <a href="#" className="shop-link">
                Shop
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreExplore;

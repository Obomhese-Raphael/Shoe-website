import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./Components/Top/Top"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import New from './Pages/New';
import WomenRow from './Components/WomenRow/WomenRow';
import women_banner from "../src/assets/women-banner.jpg"
import kids_banner from "../src/assets/kids-banner.jpg"
import MenRow from './Components/MenRow/MenRow';
import KidsRow from './Components/KidsRow/KidsRow';
import ShopCategory from './Pages/ShopCategory';
import Mens from './Pages/Mens';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Components/Pages/Signup/Signup';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
      <Router>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route
            path="/mens"
            element={
              <ShopCategory
                page={<Mens />}
                banner="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1192,c_limit/94c1b0a2-13df-45f1-823e-cf82df0d0afe/men-s-shoes-clothing-accessories.png"
                footer_row={<MenRow />}
                category="mens"
              />
            }
          />
          <Route
            path="/womens"
            element={
              <ShopCategory
                page={<Women />}
                banner={women_banner}
                footer_row={<WomenRow />}
                category="womens"
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                page={<Kids />}
                banner={kids_banner}
                footer_row={<KidsRow />}
                category="kids"
              />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App

/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import essential from "../Components/Assets/new_collection";

const Product = () => {
  const { new_collections } = useContext(ShopContext);
  const { productId } = useParams();
  const product = new_collections.find((e) => e.id === Number(productId));
  const essentials = essential.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts product={product} />
    </div>
  );
};

export default Product;

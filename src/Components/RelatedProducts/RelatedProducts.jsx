import "./RelatedProducts.css";
import Item from "../Items/Items";
import new_collections from "../Assets/new_collection";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h2 className="h2">Related Products</h2>
      <hr className="hr" />
      <div className="relatedproducts-item">
        {new_collections.map((item, i) => {
          if (item.category) {
            return (
              <Item
                key={i}
                text={item.text}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

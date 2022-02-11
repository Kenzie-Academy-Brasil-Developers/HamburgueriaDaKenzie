import "./styles.css";
import Product from "../Product";


function ProductList({products, handleClick}) {
  return (
    <div className="divContainer">
      {products.map((product) => {
        return (
          <Product
            product={product}
            handleClick={handleClick}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export default ProductList;

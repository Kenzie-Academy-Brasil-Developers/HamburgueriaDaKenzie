import { StldContainer } from "./styled";

function Product({ product, handleClick }) {
  return (
    <StldContainer>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span className="price">R$ {product.price},00</span>
        <button onClick={() => handleClick(product)}>Adicionar</button>
      </div>
    </StldContainer>
  );
}

export default Product;

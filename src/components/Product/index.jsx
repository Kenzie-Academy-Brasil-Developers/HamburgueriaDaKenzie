import { StldContainer } from "./styled";

function Product({ product, handleClick }) {
  console.log(product)
  return (
    <StldContainer>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span className="price">R$ {String(product.price.toFixed(2)).replace('.', ',')}</span>
        <button onClick={() => handleClick(product)}>Adicionar</button>
      </div>
    </StldContainer>
   
  );
}

export default Product;

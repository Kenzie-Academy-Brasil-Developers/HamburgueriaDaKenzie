import {StldProductCart} from './styled'

function CartProduct({ product, removeProduct }) {
  return (
    <StldProductCart>
      <figure>
        <img src={product.img} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <div>
          <p>{product.name}</p>
          <span>{product.category}</span>
      </div>
      <button onClick={() => removeProduct(product)}>
        <p>Remover</p>
      </button>
    </StldProductCart>
  );
}

export default CartProduct;

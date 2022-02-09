function Product({ product, handleClick }) {
  return (
    <div>
      <figure>
        <img src={product.img} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <h3>{product.name}</h3>
      <span>{product.category}</span>
      <span>{product.price}</span>
      <button onClick={() => handleClick(product)}>Adicionar</button>
    </div>
  );
}

export default Product;

function CartProduct({ product, removeProduct }) {
  return (
    <>
      <figure>
        <img src={product.img} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <div>
          <p>{product.name}</p>
          <span>{product.category}</span>
      </div>
      <button onClick={() => removeProduct(product)}>Remover</button>
    </>
  );
}

export default CartProduct;

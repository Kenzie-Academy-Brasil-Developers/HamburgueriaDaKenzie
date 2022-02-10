import CartTotal from "../CartTotal";
import CartProduct from "../CartProducts";

function Cart({ currentSale, setCurrentSale }) {
  function removeAll() {
    setCurrentSale([]);
  }

  function removeProduct(productToRemove) {
    let newCurrentSale = currentSale.filter((product) => {
      return product !== productToRemove;
    });
    setCurrentSale(newCurrentSale);
  }

  return currentSale.length > 0 ? (
    <>
      <div>Carrinho de compras</div>
      <div>
        {currentSale.map((product) => {
          return (
            <CartProduct
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          );
        })}
      </div>
      <CartTotal currentSale={currentSale} />
      <button onClick={() => removeAll()}>Remover todos</button>
    </>
  ) : (
    <>
      <div>
        <p>Carrinho de compras</p>
      </div>
      <div>
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </div>
    </>
  );
}

export default Cart;

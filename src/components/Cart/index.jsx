import CartTotal from "../CartTotal";
import CartProduct from "../CartProducts";

function Cart({ currentSale, setCurrentSale }) {
  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <>
      <div>Carrinho de compras</div>
      <div>
        {currentSale.map((product) => {
          <CartProduct key={product.id} product={product} />;
        })}
      </div>
      <CartTotal currentSale={currentSale} />
      <button onClick={() => removeAll()}>Remover todos</button>
    </>
  );
}

export default Cart;

import CartTotal from "../CartTotal";
import CartProduct from "../CartProducts";

function Cart({ currentSale, setCurrentSale }) {
  function removeAll() {
    setCurrentSale([]);
  }

  function removeProduct(productToRemove){
    let newCurrentSale = currentSale.filter(product => {
      return product !== productToRemove
    })
    setCurrentSale(newCurrentSale)
  }

  return (
    <>
      <div>Carrinho de compras</div>
      <div>
        {currentSale.map((product) => {
          return <CartProduct key={product.id} product={product} removeProduct={removeProduct}/>;
        })}
      </div>
      <CartTotal currentSale={currentSale} />
      <button onClick={() => removeAll()}>Remover todos</button>
    </>
  );
}

export default Cart;

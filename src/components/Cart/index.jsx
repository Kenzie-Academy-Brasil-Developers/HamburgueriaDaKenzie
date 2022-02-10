import CartTotal from "../CartTotal";
import CartProduct from "../CartProducts";
import {
  StldCartEmpty,
  StldCartWithProducts,
  StldCartProductsContainer,
  StldContainerTotal
} from "./styled";

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
    <StldCartWithProducts>
      <div className="cartHeader">
        <p>Carrinho de compras</p>
      </div>
      <StldCartProductsContainer>
        {currentSale.map((product) => {
          return (
            <CartProduct
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          );
        })}
      </StldCartProductsContainer>
      <StldContainerTotal>
        <CartTotal currentSale={currentSale} />
        <button onClick={() => removeAll()}>Remover todos</button>
      </StldContainerTotal>
    </StldCartWithProducts>
  ) : (
    <StldCartEmpty>
      <div className="cartHeader">
        <p>Carrinho de compras</p>
      </div>
      <div className="cartBody">
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </div>
    </StldCartEmpty>
  );
}

export default Cart;

import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductsList'
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)


  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(response => setProducts(response))
    .catch(err => console.log(err))
  }, [])

  function showProducts(inputValue){
    const newProducts = products.filter(productFiltered => {
      return productFiltered.category === inputValue
    })
    setProducts(newProducts)
  }

  function handleClick(productId){
    if(!currentSale.includes(productId)){
      setCurrentSale([...currentSale, productId])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header showProducts={showProducts}/>
        <ProductList products={products} handleClick={handleClick}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </header>
    </div>
  );
}

export default App;

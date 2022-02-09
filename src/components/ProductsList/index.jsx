import Product from '../Product'


function ProductList( { products, handleClick } ){

    return(
        products.map((product) => {
           return <Product product={product} handleClick={handleClick} key={product.id}/>
        })
    )
}

export default ProductList 


function CartTotal({currentSale}){

    return(
        <div>
            <p>Total</p>
            <span>
                R$ {currentSale.reduce((acc, cur) => {
                    return acc+cur.price
                }, 0)}
            </span>
        </div>
    )

}

export default CartTotal
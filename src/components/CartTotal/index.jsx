

function CartTotal({currentSale}){

    return(
        <div>
            <p>Total</p>
            <span>
                R$ {currentSale.reduce((acc, cur) => {
                    let total = acc+cur.price
                    let newTotal = Math.round(total, -1)
                    return newTotal
                }, 0)},00
            </span>
        </div>
    )

}

export default CartTotal
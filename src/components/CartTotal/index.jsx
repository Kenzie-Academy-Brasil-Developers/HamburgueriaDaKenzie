import {TotalContainer} from './styled'

function CartTotal({currentSale}){
    return(
        <TotalContainer>
            <p>Total</p>
            <span>
                R$ {currentSale.reduce((acc, cur) => {
                    let total = acc+cur.price
                    let newTotal = Math.round(total, -1)
                    return newTotal
                }, 0)},00
            </span>
        </TotalContainer>
    )
}

export default CartTotal
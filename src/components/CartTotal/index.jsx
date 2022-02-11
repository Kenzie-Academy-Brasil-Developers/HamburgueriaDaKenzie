import {TotalContainer} from './styled'

function CartTotal({currentSale}){
    return(
        <TotalContainer>
            <p>Total</p>
            <span>
                R$ {currentSale.reduce((acc, cur) => acc = acc + cur.price, 0).toFixed(2)}
            </span>
        </TotalContainer>
    )
}

export default CartTotal
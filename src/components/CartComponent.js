
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {useSelector} from "react-redux";

const CartComponent = () => {

    const productsInCart = useSelector(state => state.counter.value)

    return <>
        <MonetizationOnIcon/>
        <h3>{productsInCart} ----</h3>
        <ShoppingCartIcon/>
        <h3>{productsInCart}</h3>
    </>
}

export default  CartComponent
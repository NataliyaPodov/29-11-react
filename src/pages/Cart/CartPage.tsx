import { Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import Title from 'components/Title/Title'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartPage = ({ removeProductFromCart, changeProductQuantity }: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <>
            <Title>Cart</Title>
            <Grid
                container
                spacing={4}
                sx={{
                    margin: 0,
                }}
            >
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </>
    )
}
export default CartPage

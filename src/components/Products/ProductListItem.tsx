import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h4 className="product-title">iPhone 14 Pro</h4>
                <div className="product-description">This is iPhone</div>
                <div className="product-features">Tipe: phone</div>
                <div className="product-features">Capacity: 256Gb</div>
                <div className="product-price">
                    Price: <strong>$1200</strong>
                </div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem

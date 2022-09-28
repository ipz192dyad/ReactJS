import './Price.css'
import Card from 'react-bootstrap/Card';

export function Price(props) {
    let { old_price, price, available} = props;
    let price_text = null
    if (available) {
        price_text = <span className="available">{available}</span>
    }
    else {
        if (old_price)
            price_text = <div><del>{old_price + "₴"}</del><br/><span className="price">{price + "₴"}</span></div>
        else {
            price_text = <span className="price" style={{color: "black"}}>{price + "₴"}</span>
        }
    }
    return (
        <Card.Text className="price">
            {price_text}
        </Card.Text>
    )
}
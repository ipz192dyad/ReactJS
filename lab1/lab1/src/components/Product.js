import {Price} from "./Price";
import Card from 'react-bootstrap/Card';

export function Product(props) {
    let { img, imgAlt, title, price } = props;
    return (
        <Card style={{ width: '18rem' }} className="text-start">
            <Card.Img variant="top" src={img} alt={imgAlt} style={{ height: '65%'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {Price(price)}
            </Card.Body>
        </Card>
    )
}

import {Product} from "./Product";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

export function ProductList(props) {
    return (
        <div>
            <h2>Task4</h2>
            <CardGroup>
                {props.map((item) => { return Product(item) } )}
            </CardGroup>
            <div className="mt-2 float-end" >
                <Button variant="secondary">Завантажити наступні</Button>
            </div>

        </div>
    )
}

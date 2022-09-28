import {CityOption} from "./CityOption";
import Form from 'react-bootstrap/Form';

export function CitySelector(props) {
    return (
        <div className="mt-5 mb-5">
            <h2>Task 5</h2>
            <Form.Select aria-label="City Selector">
                <option>Open this select menu</option>
                {props.map((city) => {
                    return CityOption(city)
                })}
            </Form.Select>
        </div>
    )
}

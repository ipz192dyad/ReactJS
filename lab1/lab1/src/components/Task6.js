import {useState} from "react";
import {ColorOption} from "./ColorOption";
import Form from 'react-bootstrap/Form';

export function Task6(props) {
    let {colors, text, text_color} = props;
    const [color, setColor] = useState(text_color)

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div>
            <h2>Task6</h2>
            <h3 style={{backgroundColor: color}}>Text color: {color}, "{text}"</h3>
            <Form.Select aria-label="City Selector" onChange={changeColor}>
                {colors.map((color) => {
                    return ColorOption(color)
                })}
            </Form.Select>
        </div>
    )
}
import {useState} from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export function Row(props, changeTotalNumber, changeTotalPrice ) {
    let {name, price, min, max } = props
    if (!min)
        min = 0
    const [number, setNumber] = useState(min)

    const changePlus = () => {
        setNumber((number) => number + 1)
        changeTotalNumber(1)
        changeTotalPrice(price)
    }

    const changeMinus = () => {
        setNumber((number) => number - 1)
        changeTotalNumber(-1)
        changeTotalPrice(-price)
    }


    const isDisabledPlus = () => {
        if (!max || number < max)
            return false
        else
            return true
    }

    const isDisabledMinus = () => {
        if (number > min)
            return false
        else
            return true
    }

    return (
        <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell><Button variant="contained" color="secondary" onClick={changePlus} disabled={isDisabledPlus()}>+</Button> {number} <Button variant="contained" color="secondary" onClick={changeMinus} disabled={isDisabledMinus()}>-</Button></TableCell>
            <TableCell>{number * price}</TableCell>
        </TableRow>
    );
}
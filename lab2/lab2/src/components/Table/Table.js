import {useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Row } from "./Row"
import Paper from '@mui/material/Paper';

export function TableComp(props) {
    let stNumber = 0
    let stPrice = 0
    props.forEach(function (arrayItem) {
        if (arrayItem.min) {
            stNumber = stNumber + arrayItem.min;
            stPrice = stPrice + arrayItem.min * arrayItem.price
        }
    });

    const [itemsNumber, setItemsNumber] = useState(stNumber)
    const [totalPrice, setTotalPrice] = useState(stPrice);

    const changeTotalNumber = (number) => {
        setItemsNumber((itemsNumber) => itemsNumber + number)
    }

    const changeTotalPrice = (price) => {
        setTotalPrice((totalPrice) => totalPrice + price)
    }

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Price</b></TableCell>
            <TableCell><b>Quantity</b></TableCell>
            <TableCell><b>Total</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.map((row) => { return Row(row, changeTotalNumber, changeTotalPrice) } )}
            <TableRow>
            <TableCell><b>Totals</b></TableCell>
            <TableCell></TableCell>
            <TableCell><b>{itemsNumber}</b></TableCell>
            <TableCell><b>{totalPrice}</b></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
}
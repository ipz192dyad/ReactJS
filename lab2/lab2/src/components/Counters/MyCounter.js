import {useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function MyCounter(props) {
    let { id, min, max, cNumber } = props
    if (!cNumber && !min && !max)
        cNumber = 0
    else if (!cNumber && min)
        cNumber = min
   
    const [number, setNumber] = useState(cNumber)

    const changePlus = () => {
        setNumber((number) => number + 1)
    }

    const changeMinus = () => {
        setNumber((number) => number - 1)
    }

    const reset = () => {
        setNumber(cNumber)
    }

    const isDisabledPlus = () => {
        if (!max || number < max)
            return false
        else
            return true
    }

    const isDisabledMinus = () => {
        if (!min || number > min)
            return false
        else
            return true
    }

    return (
        <Box key={id}>
            <Stack spacing={2} direction="row" justifyContent="center" sx={{ my: 2 }} alignItems="center">
                <Typography variant="body1" component="span"><b>Поточний рахунок: {number}</b></Typography>
                <Button variant="contained" color="secondary" onClick={changePlus} disabled={isDisabledPlus()}>+</Button>
                <Button variant="contained" color="secondary" onClick={changeMinus} disabled={isDisabledMinus()}>-</Button>
                <Button variant="contained" color="secondary" onClick={reset}>Reset</Button>
            </Stack>
        </Box>
    );
}
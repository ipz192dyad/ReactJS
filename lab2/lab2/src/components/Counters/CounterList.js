import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MyCounter } from "./MyCounter"

export function CounterList(props) {
    return (
        <Box>
            <Typography variant="h4" component="h4" color="primary">CounterList</Typography>
            <Stack spacing={2}justifyContent="center" sx={{ my: 2 }} alignItems="center">
            {props.map((counter) => { return MyCounter(counter) } )}
            </Stack>
        </Box>
    );
}
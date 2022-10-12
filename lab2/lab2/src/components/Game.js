import {useState} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export function Game() {
    const [disableNewGameButton, setDisableNewGameButton] = useState(false)
    const [disableGame, setDisableGame] = useState(true)
    const [attempts, setAttempts] = useState(10)
    const [number, setNumber] = useState(0)
    const [input, setInput] = useState(0)
    const [src, setSrc] = useState()
    const [info, setInfo] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log([input, number])
        if (input === number) {
            EndGame()
            setSrc(require('../assets/success.jpg'))
        }
        else {
            if (number < input)
                setInfo([...info, 'N < ' + input])
            else
                setInfo([...info, 'N > ' +input])
            setAttempts((attempts) => attempts - 1)
        }
    }

    const getNumber = (e) => {
        setInput(Number(e.target.value))
    }
    
    const StartGame = () => {
        setDisableNewGameButton(true)
        setDisableGame(false)
        setNumber(Math.floor(Math.random() * 1000) + 1)
        setSrc()
        setInfo([])
    }

    const EndGame = () => {
        setDisableNewGameButton(false)
        setDisableGame(true)
        setAttempts(10)
        setSrc(require('../assets/loose.jpg'))
    }

    if (attempts === 0)
        EndGame()

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 5 }}>
            <Typography variant="h3" component="h3" color="primary" sx={{ my: 5 }} >
                Game<br/>
                Guess the number between 1 and 1000
            </Typography>
            <Button type="button" onClick={StartGame} variant="contained" size="large" color="secondary" sx={{ mb: 2 }} disabled={disableNewGameButton}>New Game</Button>
            <TextField onChange={getNumber} required id="number" label="Number between 1 and 1000" type="number" variant="filled" color="secondary" fullWidth disabled={disableGame} />
            <Button type="submit" variant="contained" size="large" color="secondary" sx={{ mt: 2 }} disabled={disableGame}>Guess</Button>
            {src ? <img src={src} alt="" style={{maxWidth: "100%"}}></img> : <span></span>}
            <Paper elevation={3}><Typography variant="h6" component="h6" color="primary" sx={{ mt: 5 }} >Information</Typography><Box textAlign="left" sx={{ ml: 5}}>{info.map((row, index) => { return <Typography variant="body1" component="p" key={index}>{row}</Typography> } )}</Box></Paper>
            <Typography variant="h6" component="h6" color="primary" sx={{ mt: 5 }} >Attempts: {attempts}</Typography>
        </Box>
    );
}
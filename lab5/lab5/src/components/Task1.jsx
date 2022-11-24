import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Task1() {
    const re = /(\w+\.?|-?\w+?)+@\w+\.?-?\w+?(\.\w{2,3})+/

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [theme, setTheme] = useState('');
    const [message, setMessage] = useState('');

    const isEmailValid = () => {
        return re.test(email) || email.length === 0
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleThemeChange = (event) => {
        setTheme(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({name, email, theme, message})
    }

    return (
        <Box component="form" sx={{m: 5}} onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField value={name} onChange={handleNameChange} id="Name" label="Ім'я" variant="filled" sx={{m: 1, width: 350 }}/>
                <TextField value={email} id="Email" label="E-mail" variant="filled" sx={{m: 1, width: 350 }} required onChange={handleEmailChange} error={!isEmailValid()} helperText={!isEmailValid() ? "Неправильний E-mail" : ""}/>
                <TextField value={theme} onChange={handleThemeChange} id="Theme" label="Тема" variant="filled" sx={{m: 1, width: 350 }} required/>
                <TextField value={message} onChange={handleMessageChange} id="Message" label="Повідомлення" variant="filled" sx={{m: 1, width: 350 }} multiline rows={6}/>
                <Button type="submit" variant="contained" disabled={!isEmailValid()}>Відправити</Button>
            </Paper>
        </Box>
    );
}
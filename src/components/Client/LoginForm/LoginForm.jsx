import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import Loader from '../Loader/Loader';
import { login } from '../../../API';
import { useSelector } from 'react-redux';
import { locales } from '../../../locales';
import { useNavigate } from 'react-router-dom/dist';

export const LoginForm = () => {
    const {language} = useSelector(state => state.actionReducer)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({
        email: false,
        password: false,
    })
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const handleValidate = (event) => {
        const regExps = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            password: /[\W_]/g,
        }
        if (!regExps[event.target.id].test(event.target.value)) {
            setIsError(prev => ({ ...prev, [event.target.id]: true }))
        }
    }

    const handleChangeInput = (event) => {
        if (errorMessage) {
            setErrorMessage('')
        }
        setIsError(prev => ({ ...prev, [event.target.id]: false }))
        setCredentials(prevCreds => ({ ...prevCreds, [event.target.id]: event.target.value }))
    }

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSendData = () => {
        setIsLoading(true)
        login(credentials)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                    navigate('/home')
                } else {
                    setErrorMessage(response.message)
                }
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
            })
            .finally(response => {
                setIsLoading(false)
            })
    }

    return (
        <form className="form">
            <div className='title'>{locales[language].FORM_PAGE.TITLE}</div>
            <FormControl variant="outlined" sx={{ width: '100%' }} className='input' >
                <TextField
                    id="email"
                    label={locales[language].FORM_PAGE.EMAIL}
                    variant="outlined"
                    size='small'
                    error={isError.email}
                    onChange={handleChangeInput}
                    onBlur={handleValidate}
                    value={credentials.email}
                    sx={{
                        input: { color: '#ffffff' },
                        label: { color: '#a3a3a3' },
                    }}
                />
            </FormControl>
            <FormControl
                variant="outlined"
                sx={{
                    width: '100%',
                    input: { color: '#ffffff' },
                    label: { color: '#a3a3a3' },
                    '& .MuiInputBase-root': {
                        '& .MuiButtonBase-root': {
                            color: '#a3a3a3'
                        }
                    },
                }} className='input'>
                <InputLabel error={isError.password} htmlFor="outlined-adornment-password" size='small'>{locales[language].FORM_PAGE.PASSWORD}</InputLabel>
                <OutlinedInput
                    error={isError.password}
                    onChange={handleChangeInput}
                    value={credentials.password}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    size='small'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={locales[language].FORM_PAGE.PASSWORD}
                />
            </FormControl>
            <Button
                variant="contained"
                onClick={handleSendData}
                disabled={isLoading}
            >{isLoading ? <Loader /> : locales[language].FORM_PAGE.SIGN_IN}</Button>
            <div className='subtitle'>{errorMessage}</div>
        </form>
    )
}
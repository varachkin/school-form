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

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSendData = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 3000)
    }

    return (
        <form className="form">
            <div className='title'>Login</div>
            <FormControl variant="outlined" sx={{ width: '100%' }} className='input' >
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size='small'
                    error={isError}
                    autoComplete={false}
                    sx={{
                        input: { color: '#ffffff' },
                        label: { color: '#a3a3a3' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                // borderColor: '#90caf9',
                            },
                            '&:hover fieldset': {
                                // borderColor: '#ffffff',
                            },
                            '&.Mui-focused fieldset': {
                                // borderColor: '#90caf9',
                            },
                        },
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
                        '& .MuiInputAdornment-root': {
                            '& .MuiButtonBase-root': {
                                // borderColor: '#90caf9',
                                color: '#a3a3a3'
                            }
                        },
                        '&:hover fieldset': {
                            // borderColor: '#ffffff',
                        },
                        '&.Mui-focused fieldset': {
                            // borderColor: '#90caf9',
                        },
                    },
                }} className='input'>
                <InputLabel error={isError} htmlFor="outlined-adornment-password" size='small'>Password</InputLabel>
                <OutlinedInput
                    error={isError}
                    id="outlined-adornment-password"
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
                    label="Password"
                />
            </FormControl>
            <Button
                variant="contained"
                onClick={handleSendData}
                disabled={isLoading}
            >{isLoading ? <Loader /> : 'SEND'}</Button>
        </form>
    )
}
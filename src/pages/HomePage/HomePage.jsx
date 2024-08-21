import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { locales } from "../../locales";
import Loader from '../../components/Client/Loader/Loader';
import { AnimatedTitle } from "../../components/Client/AnimatedTitle/AnimatedTitle";
import { Footer } from "../../components/Client/Footer/Footer";
import { useEffect, useState } from "react";
import { ButtonTimer } from "../../components/Client/ButtonTimer/ButtonTimer";
import { Button, FormControl, TextField } from "@mui/material";


export default function HomePage() {
  const { language, serial } = useSelector(state => state.actionReducer)
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState('')
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)
  let navigate = useNavigate();

  const handleSendData = ()=> {

  }

  const handleChangeInput = (event)=> {
    setNumber(event.target.value)
  }

  return (
    <>
      <div className="home_page_wrapper">
        <dic className='title'>HOME PAGE</dic>
        <form className="form">
          <div className='title'>{locales[language].FORM_PAGE.TITLE}</div>
          <FormControl variant="outlined" sx={{ width: '100%' }} className='input' >
            <TextField
              id="email"
              label='Number box'
              variant="outlined"
              size='small'
              type="number"
              onChange={handleChangeInput}
              // onBlur={handleValidate}
              value={number}
              sx={{
                input: { color: '#ffffff' },
                label: { color: '#a3a3a3' },
              }}
            />
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSendData}
            disabled={isLoading || !number}
          >
            {isLoading ? <Loader /> : locales[language].FORM_PAGE.SIGN_IN}
          </Button>
        </form>
      </div>
    </>

  )
}

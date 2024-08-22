import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { locales } from '../../../locales';
import React, { useState } from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import Loader from '../Loader/Loader';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { language, serial } = useSelector(state => state.actionReducer)
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState('')
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)
  let navigate = useNavigate();

  const handleSendData = () => {

  }

  const handleChangeInput = (event) => {
    setNumber(event.target.value)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-header'>
          <Tab label={locales[language].HOME_PAGE.TAB_1} {...a11yProps(0)} sx={{ flex: 1, color: '#fff' }} />
          <Tab label={locales[language].HOME_PAGE.TAB_2} {...a11yProps(1)} sx={{ flex: 1, color: '#fff' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <form className="form">
          <div className='title'>{locales[language].HOME_PAGE.TAB_1}</div>
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
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : locales[language].HOME_PAGE.OPEN}
          </Button>
        </form>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <form className="form">
          <div className='title'>{locales[language].HOME_PAGE.TAB_2}</div>
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
            disabled={isLoading}
            color='warning'
          >
            {isLoading ? <Loader /> : locales[language].HOME_PAGE.BLOCK}
          </Button>
        </form>
      </CustomTabPanel>
    </Box>
  );
}
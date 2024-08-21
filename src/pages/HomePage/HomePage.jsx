import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { locales } from "../../locales";
import Loader from '../../components/Client/Loader/Loader';
import { AnimatedTitle } from "../../components/Client/AnimatedTitle/AnimatedTitle";
import { Footer } from "../../components/Client/Footer/Footer";
import { useEffect, useState } from "react";
import { Button } from "../../components/Client/Button/Button";
import { ButtonTimer } from "../../components/Client/ButtonTimer/ButtonTimer";


export default function HomePage() {
  const { language, serial } = useSelector(state => state.actionReducer)
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)
  let navigate = useNavigate();

  const handleNavigateToHome = (event) => {
    event.stopPropagation();
    navigate("/home")
  }

  const handleGoStart = ()=> {
    navigate('/')
  }

  const randomRedirect = ()=> {
    const random = Math.round(Math.random());
    if(random){
      navigate('/error')
    }else{
      navigate('/success')
    }
  }

  useEffect(()=> {
    const random = Math.round(Math.random());
    console.log(random)
    if(random){
      setIsError(false)
      setTimeout(randomRedirect, 5000)
    }else{
      setIsError(true)
    }
    
  }, [])

  return (
    <>
      <div className="home_page_wrapper">
        <div
          className="home_page_container"
          onClick={handleNavigateToHome}
          onTouchMove={handleNavigateToHome}
        >
          <div className="home_page_user_ico"></div>

          <AnimatedTitle
            title={locales[language].HOME_PAGE.HI}
            subTitle={user ? `${user.firstName} ${user.lastName}` : locales[language].HOME_PAGE.UNKNOWN}
          />
          {isError ? <div className="home_page_locker_ico"></div> :
            <div className='loader-wrapper'>
              <Loader size={18} />
            </div>}
          {isError ? <AnimatedTitle
            subTitle={locales[language].HOME_PAGE.SUBTITLE_ERROR}
            error={isError}
          /> :
            <AnimatedTitle
              title={locales[language].HOME_PAGE.TITLE}
              subTitle={locales[language].HOME_PAGE.SUBTITLE}
            />}
        </div>
        {isError && <div className="service-page-footer">
          <div className="note">{locales[language].ERROR_PAGE.NOTE}</div>
          <ButtonTimer callback={handleGoStart} onClick={handleGoStart}>
            {locales[language].BUTTONS.BACK}
          </ButtonTimer>
        </div>}
      </div>
    </>

  )
}

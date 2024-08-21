import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { locales } from "../../locales";
import Loader from '../../components/Client/Loader/Loader';
import { AnimatedTitle } from "../../components/Client/AnimatedTitle/AnimatedTitle";
import Logo from "../../components/Client/Logo/Logo";
import { useEffect, useRef } from "react";
import { LoginForm } from "../../components/Client/LoginForm/LoginForm";

export default function StartPage() {
  const { language, serial } = useSelector(state => state.actionReducer)


  return (!serial ?
    <div className='loader-wrapper'>
      <Loader size={18} />
    </div> :
    <div className="start_page_wrapper">
      <div className="start-page-logo"></div>
      <div
        className="start_page_container"
      >
        <LoginForm />
        {/* <AnimatedTitle
          title={locales[language].START_PAGE.TITLE}
          subTitle={locales[language].START_PAGE.SUBTITLE}
        /> */}
      </div>
    </div>)
}

import Logo from "../Logo/Logo";
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../features/actions/actionsSlice";
import { locales } from "../../../locales";
import { clearCart } from "../../../features/data/dataSlice";
import { useEffect, useRef, useState } from "react";
import de from './../../../assets/img/flags/de.png'
import uk from './../../../assets/img/flags/gb.png'
import pl from './../../../assets/img/flags/pl.png'
import fr from './../../../assets/img/flags/fr.png'
import ua from './../../../assets/img/flags/ua.png'

const { languages } = locales;

export default function Header() {
    const { pathname } = useLocation();
    const { language, serial, devMode } = useSelector(state => state.actionReducer)
    const dispatch = useDispatch();
    const [clickCount, setClickCount] = useState(0);
    const navigate = useNavigate()

    const handleNavigateToStart = () => {
        dispatch(clearCart())
        navigate('/')
    }
    const handleToLogin = () => {
        navigate('/login')
    }

    const handleChangeLanguage = (event) => {
        dispatch(changeLanguage(event.target.id))
    }

    useEffect(() => {
        const handleClick = (event) => {
            event.stopPropagation()
            setClickCount((prevCount) => prevCount + 1);

            // Reset click count after 1 second
            setTimeout(() => {
                setClickCount(0);
            }, 1000);
        };
    }, []);

    useEffect(() => {
        if (clickCount === 3) {
            handleToLogin()
        }
    }, [clickCount]);

    const flags = {
        de: de,
        en: uk,
        pl: pl,
        fr: fr,
        ua: ua,
    }
    console.log(language)
    return (
        <header className="header">
            {/* <SecretDevelopmentMode /> */}
            <div className="header-buttons-block">
                {languages.map(lang => (
                    <div
                        className={`header-flag-wrapper ${lang === language ? 'active' : ''}`}
                        id={lang}
                        key={lang}
                        onClick={handleChangeLanguage}
                    >
                        <img src={flags[lang]} alt={lang} />
                    </div>
                ))}
            </div>

            {pathname !== '/' ? <Logo
                handleNavigateToStart={handleNavigateToStart}
                variant={pathname === '/login' || pathname === '/settings' ? 'black' : null}
            /> : devMode ?
                serial ?
                    <h3 className="service-page-subtitle">{serial}</h3> :
                    <h3 className="service-page-subtitle error">{locales[language].START_PAGE.ERROR_SERIAL}</h3> :
                null}
        </header>
    )
}



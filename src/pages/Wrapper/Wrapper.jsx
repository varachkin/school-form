import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Client/Footer/Footer";
import Header from "../../components/Client/Header/Header";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function Wrapper({ children }) {
    const { pathname } = useLocation();
    const inputRef = useRef()
    let navigate = useNavigate();
  
    const handleNavigateToHome = (event) => {
      event.stopPropagation();
      navigate("/home")
    }
  
    const handleChange = (event) => {
      console.log(event.target.value)
      if (event.target.value.length === 10) {
        console.log('!!!!!!!!!!!!!!!!!!!!')
        handleNavigateToHome(event)
      }
    }
  
    const handleFocus = ()=> {
      inputRef?.current?.focus();
    }
  
    useEffect(() => {
      handleFocus()
    })

    return (
        <div className="wrapper" onClick={handleFocus}>
            {(pathname === '/' || pathname === '/home') && <Header />}
            <main className="main">
                {children}
            </main>
            {/* {pathname === '/home' && <Footer />} */}
        </div>
    )
}
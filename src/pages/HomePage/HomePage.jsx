import { Link } from "@mui/material";
import BasicTabs from "../../components/Client/BasicTabs/BasicTabs";
import { locales } from "../../locales";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function HomePage() {
  const { language } = useSelector(state => state.actionReducer)
  const navigate = useNavigate();

  const handleLogOut = ()=> {
    navigate('/')
  }
  return (
    <>
      <div className="home_page_wrapper">
        <div className='title-left'><Link onClick={handleLogOut}><ChevronLeftIcon/>{locales[language].HOME_PAGE.LOG_OUT}</Link></div>
        <BasicTabs />
      </div>
    </>

  )
}

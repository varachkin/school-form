import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";


import Wrapper from "./pages/Wrapper/Wrapper";
import HomePage from "./pages/HomePage/HomePage";



export default function AppRouter(props) {
    return (

        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<StartPage {...props} />} />
                    <Route path="/home" element={<HomePage {...props} />} />
                    <Route path="/error" element={<ErrorPage {...props} />} />
                    <Route path="/success" element={<SuccessPage {...props} />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>

    );
}

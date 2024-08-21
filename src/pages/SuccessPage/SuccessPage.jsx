import { useLocation, useNavigate } from "react-router-dom"
import { ButtonTimer } from "../../components/Client/ButtonTimer/ButtonTimer"
import { useDispatch, useSelector } from "react-redux"
import { locales } from "../../locales";
import { AnimatedTitle } from "../../components/Client/AnimatedTitle/AnimatedTitle";
import { useState } from "react";

export default function SuccessPage() {
    const { language } = useSelector(state => state.actionReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()
    const { cart } = useSelector(state => state.dataReducer);
    const [content, setContent] = useState({
        title: locales[language].SUCCESS_PAGE.TITLE,
        subtitle: locales[language].SUCCESS_PAGE.SUBTITLE,
        subtitle_2: locales[language].SUCCESS_PAGE.SUBTITLE_2,
        note: locales[language].SUCCESS_PAGE.NOTE,
        button: locales[language].BUTTONS.FINISH,
        path: '/',
    })

    const handleGoStart = () => {
        navigate('/')
    }
    return (
        <div className="service-page-wrapper success-page-wrapper">
            <div className="service-page-container">
                <div className="o-circle c-container__circle o-circle__sign--success">
                    <div className="o-circle__sign"></div>
                </div>
                <AnimatedTitle
                    title={content.title}
                    subTitle={content.subtitle}
                />

                <div className="subtitle">{content.subtitle_2}</div>
                <div className="service-page-footer">
                    <div className="note">{content.note}</div>
                    <ButtonTimer callback={handleGoStart} onClick={handleGoStart}
                        timer={9}
                        status='success'>
                        {content.button}
                    </ButtonTimer>
                </div>
            </div>
        </div>

    )
}
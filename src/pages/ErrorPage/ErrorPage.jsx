import { useNavigate } from "react-router-dom"
import { ButtonTimer } from "../../components/Client/ButtonTimer/ButtonTimer";
import { useSelector } from "react-redux";
import { locales } from "../../locales";
import { AnimatedTitle } from "../../components/Client/AnimatedTitle/AnimatedTitle";
import { useState } from "react";

export default function ErrorPage() {
    const { language } = useSelector(state => state.actionReducer)
    const navigate = useNavigate()

    const [content, setContent] = useState({
        title: locales[language].ERROR_PAGE.TITLE,
        subtitle: locales[language].ERROR_PAGE.SUBTITLE,
        subtitle_2: locales[language].ERROR_PAGE.SUBTITLE_2,
        note: locales[language].ERROR_PAGE.NOTE,
        button: locales[language].BUTTONS.BACK,
        path: '/',
    })
    const handleGoStart = () => {
        navigate(content.path)
    }

    return (
        <div className="service-page-wrapper error-page-wrapper">
            <div className="service-page-container">
                <div className="o-circle c-container__circle o-circle__sign--failure">
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
                        status='error'>
                        {content.button}
                    </ButtonTimer>
                </div>

            </div>
        </div>

    )
}

import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import headerCss from "./headerCss.module.css"
import Phone from "../../../../phone/phone";

const Header = () => {
    return <header className={headerCss.header}>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={headerCss.content}>
                    <h1>Производство<br/>металлоизделий</h1>
                    <h2>Наша компания предлагает спектр услуг:</h2>
                    <ul>
                        <li><p>Изготовление металлоконструкций</p></li>
                        <li><p>Пескоструйная обработка</p></li>
                        <li><p>Порошковая покраска</p></li>
                        <li><p>Резка труб</p></li>
                        <li><p>Лазерная резка</p></li>
                        <li><p>Опоры освещения</p></li>
                        <li><p>Жидкая покраска</p></li>
                    </ul>
                    <Phone phoneNumber={"+7 (495) 000-00-00"}/>
                </div>
            </div>
        </div>
    </header>
}

export default Header;

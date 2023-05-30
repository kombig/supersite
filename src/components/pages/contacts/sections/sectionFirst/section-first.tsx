import React from 'react';

import sectionFirstCss from "./section-firstCss.module.css"

import YandexMap from "../../../../map/yandex-map-container";

const sectionFirst = () => {
    return <section>
        <div className={sectionFirstCss.content}>
            <div className={sectionFirstCss.time}>
                <ul>
                    <li><p>Мы работаем</p></li>
                    <li><p>&nbsp;</p></li>
                    <li><p>Понедельник - Пятница</p></li>
                    <li><p>8:<span>00</span> — 18:<span>00</span></p></li>
                    <li><p>Cуббота — Воскресенье</p></li>
                    <li><p>Выходные дни</p></li>
                </ul>
            </div>
            <YandexMap/>
        </div>
    </section>
}

export default sectionFirst;

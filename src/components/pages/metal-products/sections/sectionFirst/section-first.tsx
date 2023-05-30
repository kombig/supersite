import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

const sectionFirst = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <h1 className={sectionFirstCss.titleMetalProducts}>Производство изделий в Москве</h1>
                    <p className={sectionFirstCss.descriptionMetalProducts}>Вам достаточно выслать нам готовый чертеж,
                        все остальное мы сделаем сами: зачистим, покрасим, согнём, отрежем, раскроим, сварим, поправим,
                        привезем к вам на объект и смонтируем:
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default sectionFirst;

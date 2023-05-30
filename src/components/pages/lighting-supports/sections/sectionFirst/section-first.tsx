import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

const sectionFirst = () => {
    return <section className={sectionFirstCss.LightningSupports}>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <div className={sectionFirstCss.text}>
                        <h1 className={sectionFirstCss.titleLightningSupports}>Изготовление опор освещения</h1>
                        <ul className={sectionFirstCss.listOfLightningSupports}>
                            <li><p>Опоры освещения - это неотъемлемая часть любой современной инфраструктуры городов и
                                населенных пунктов. Они не только обеспечивают безопасность пешеходов и водителей на
                                дорогах в темное время суток, но и создают уютную атмосферу и визуальный комфорт в
                                городском пространстве.</p></li>
                            <li><p>При изготовлении опор освещения необходимо учитывать множество факторов: начиная от
                                выбора качественных материалов и деталей, и заканчивая проектированием конструкции и
                                монтажем опор. Только правильно изготовленные опоры освещения способны обеспечить
                                надежность и долговечность, а также качественную и безопасную работу осветительных
                                приборов.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default sectionFirst;

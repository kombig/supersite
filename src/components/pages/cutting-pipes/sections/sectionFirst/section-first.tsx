import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

import cutlaser from "../../../../../assets/images/cutting-pipes/sectionFirst/cutlaser.png"

import Image from "next/image"

const SectionFirst = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <h1 className={sectionFirstCss.titlePipeCutting}>Труборез</h1>
                    <div className={sectionFirstCss.sizeWrapper}>
                        <div className={sectionFirstCss.sizeImg}>
                            <Image src={cutlaser} alt={"cutlaser"}/>
                        </div>
                        <div className={sectionFirstCss.size}>
                            <h2>Максимальный размер трубы:</h2>
                            <ul>
                                <li><p>Длина до 12 м</p></li>
                                <li><p>Диаметр до 350 мм</p></li>
                                <li><p>Толщина стенки до 10 мм</p></li>
                                <li><p>Нагрузка лазера до 3 т</p></li>
                            </ul>
                            <div className={sectionFirstCss.durability}>
                                <h2>Прочность металла</h2>
                                <p>Мы осуществляем резку металлов различной степени прочности и диаметра.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFirst;

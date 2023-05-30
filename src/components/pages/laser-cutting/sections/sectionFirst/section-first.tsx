import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

import laser from "../../../../../assets/images/laser-cutting/sectionFirst/laser.png"

import Image from "next/image"

const SectionFirst = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <h1 className={sectionFirstCss.titlePipeCutting}>Параметры лазерного станка</h1>
                    <div className={sectionFirstCss.sizeWrapper}>
                        <div className={sectionFirstCss.sizeImg}>
                            <Image src={laser} alt={"laser"}/>
                        </div>
                        <div className={sectionFirstCss.durability}>
                            <h2>Оптоволоконный лазерный станок:</h2>
                            <p>Волоконный излучатель имеет микро значения, поэтому луч с абсолютной точностью
                                вырезает острые углы и сложные формы.</p>
                        </div>
                        <div className={sectionFirstCss.size}>
                            <h2>Размеры:</h2>
                            <ul>
                                <li><p>Длина листа до 6 м</p></li>
                                <li><p>Толщина до 20 мм</p></li>
                                <li><p>Ширина листа 2 м</p></li>
                                <li><p>Точность 0,05 мм</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFirst;
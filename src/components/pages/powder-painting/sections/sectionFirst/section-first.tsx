import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

import furnaceFirst from "../../../../../assets/images/powder-painting/sectionFirst/furnace1.png";

import Image from "next/image"

const sectionFirst = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <h1 className={sectionFirstCss.titleFurnaceFirst}>Параметры печи №1</h1>
                    <div className={sectionFirstCss.sizeWrapper}>
                        <div className={sectionFirstCss.sizeImg}>
                            <Image src={furnaceFirst} alt={"furnaceFirst"}/>
                        </div>
                        <div className={sectionFirstCss.size}>
                            <h1>Размеры:</h1>
                            <ul>
                                <li><p>Длина печи 13 м</p></li>
                                <li><p>Высота печи 2,5 м</p></li>
                                <li><p>Ширина печи 1,8 м</p></li>
                                <li><p>Суммарная нагрузка 2,5 т</p></li>
                            </ul>
                            <div className={sectionFirstCss.durability}>
                                <h2>Камераполимеризационная печь</h2>
                                <p>Одним из этапов покраски является так называемое «запекание» нанесенной краски.
                                    Для этого деталь помещается в камеру полимеризации. За счет покрытия изделия
                                    порошковым слоем удается достичь монолитного качества окраски.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default sectionFirst;

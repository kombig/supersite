import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import furnaceSecond from "../../../../../assets/images/powder-painting/sectionSecond/furnace2.png";

import Image from "next/image"

const SectionSecond = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSecondCss.content}>
                    <h1 className={sectionSecondCss.titleFurnaceSecond}>Параметры печи №2</h1>
                    <div className={sectionSecondCss.sizeWrapper}>
                        <div className={sectionSecondCss.sizeImg}>
                            <Image src={furnaceSecond} alt={"furnaceSecond"}/>
                        </div>
                        <div className={sectionSecondCss.size}>
                            <h2>Размеры:</h2>
                            <ul>
                                <li><p>Длина печи 10 м</p></li>
                                <li><p>Высота печи 2,5 м</p></li>
                                <li><p>Ширина печи 1,8 м</p></li>
                                <li><p>Суммарная нагрузка 2,5 т</p></li>
                            </ul>
                        </div>
                        <div className={sectionSecondCss.durability}>
                            <h2>Камераполимеризационная печь</h2>
                            <p>Эффект монолитного покрытия достигается за счет нагрева слоя порошковой краски, в
                                результате чего происходит его оплавление.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSecond;

import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionThirdCss from "./section-thirdCss.module.css"

import furnaceThird from "../../../../../assets/images/powder-painting/sectionThird/furnace3.png";

import Image from "next/image"

const sectionThird = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionThirdCss.content}>
                    <h1 className={sectionThirdCss.titleFurnaceFirst}>Параметры печи №3</h1>
                    <div className={sectionThirdCss.sizeWrapper}>
                        <div className={sectionThirdCss.sizeImg}>
                            <Image src={furnaceThird} alt={"furnaceThird"}/>
                        </div>
                        <div className={sectionThirdCss.size}>
                            <h1>Размеры:</h1>
                            <ul>
                                <li><p>Длина печи 15 м</p></li>
                                <li><p>Высота печи 2,8 м</p></li>
                                <li><p>Ширина печи 1,8 м</p></li>
                                <li><p>Суммарная нагрузка 2,5 т</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default sectionThird;

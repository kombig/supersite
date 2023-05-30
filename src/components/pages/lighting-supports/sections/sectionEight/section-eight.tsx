import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionEightCss from "./section-eightCss.module.css";

import first from "../../../../../assets/images/lighting-supports/sectionEight/1.jpg";
import second from "../../../../../assets/images/lighting-supports/sectionEight/2.jpg";
import third from "../../../../../assets/images/lighting-supports/sectionEight/3.jpg";
import four from "../../../../../assets/images/lighting-supports/sectionEight/4.jpg";
import five from "../../../../../assets/images/lighting-supports/sectionEight/5.jpg";
import six from "../../../../../assets/images/lighting-supports/sectionEight/6.jpg";
import SwiperExamplesWork from "../../../../swiper-examples-work/swiper-examples-work-container";

const SectionEight = () => {
    const slides = [
        {image: first, imageAlt: "first"},
        {image: second, imageAlt: "second"},
        {image: third, imageAlt: "third"},
        {image: four, imageAlt: "four"},
        {image: five, imageAlt: "five"},
        {image: six, imageAlt: "six"},
    ]

    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionEightCss.content}>
                    <h1 className={sectionEightCss.titleExampleWorks}>Примеры работ</h1>
                </div>
            </div>
        </div>
        <div className={sectionEightCss.swiper}>
            <SwiperExamplesWork slidesInfo={slides}/>
        </div>
    </section>
}

export default SectionEight;

import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import first from "../../../../../assets/images/main/sectionSecond/1.jpg";
import second from "../../../../../assets/images/main/sectionSecond/2.jpg";
import third from "../../../../../assets/images/main/sectionSecond/3.jpg";
import four from "../../../../../assets/images/main/sectionSecond/4.jpg";
import five from "../../../../../assets/images/main/sectionSecond/5.jpg";
import six from "../../../../../assets/images/main/sectionSecond/6.jpg";
import seven from "../../../../../assets/images/main/sectionSecond/7.jpg";
import eight from "../../../../../assets/images/main/sectionSecond/8.jpg";
import nine from "../../../../../assets/images/main/sectionSecond/9.jpg";

import SwiperExamplesWork from "../../../../swiper-examples-work/swiper-examples-work-container";

const SectionSecond = () => {
    const slides = [
        {image: first, imageAlt: "first"},
        {image: second, imageAlt: "second"},
        {image: third, imageAlt: "third"},
        {image: four, imageAlt: "four"},
        {image: five, imageAlt: "five"},
        {image: six, imageAlt: "six"},
        {image: seven, imageAlt: "seven"},
        {image: eight, imageAlt: "eight"},
        {image: nine, imageAlt: "nine"},
    ]

    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSecondCss.content}>
                    <h1 className={sectionSecondCss.titleExampleWorks}>Примеры работ</h1>
                </div>
            </div>
        </div>
        <div className={sectionSecondCss.swiper}>
            <SwiperExamplesWork slidesInfo={slides}/>
        </div>
    </section>
}

export default SectionSecond;

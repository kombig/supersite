import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionThirdCss from "./section-thirdCss.module.css";

import first from "../../../../../assets/images/laser-cutting/sectionThird/1.jpg";
import second from "../../../../../assets/images/laser-cutting/sectionThird/2.jpg";
import third from "../../../../../assets/images/laser-cutting/sectionThird/3.jpg";
import four from "../../../../../assets/images/laser-cutting/sectionThird/4.jpg";
import five from "../../../../../assets/images/laser-cutting/sectionThird/5.jpg";
import six from "../../../../../assets/images/laser-cutting/sectionThird/6.jpg";
import seven from "../../../../../assets/images/laser-cutting/sectionThird/7.jpg";
import eight from "../../../../../assets/images/laser-cutting/sectionThird/8.jpg";

import SwiperExamplesWork from "../../../../swiper-examples-work/swiper-examples-work-container";

const SectionThird = () => {
    const slides = [
        {image: first, imageAlt: "first"},
        {image: second, imageAlt: "second"},
        {image: third, imageAlt: "third"},
        {image: four, imageAlt: "four"},
        {image: five, imageAlt: "five"},
        {image: six, imageAlt: "six"},
        {image: seven, imageAlt: "seven"},
        {image: eight, imageAlt: "eight"}
    ]

    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionThirdCss.content}>
                    <h1 className={sectionThirdCss.titleExampleWorks}>Примеры работ</h1>
                </div>
            </div>
        </div>
        <div className={sectionThirdCss.swiper}>
            <SwiperExamplesWork slidesInfo={slides}/>
        </div>
    </section>
}

export default SectionThird;

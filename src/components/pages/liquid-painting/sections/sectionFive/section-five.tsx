import React from 'react';
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFiveCss from "./section-fiveCss.module.css";

import first from "../../../../../assets/images/liquid-painting/sectionFive/1.png";
import second from "../../../../../assets/images/liquid-painting/sectionFive/2.png";
import third from "../../../../../assets/images/liquid-painting/sectionFive/3.png";
import four from "../../../../../assets/images/liquid-painting/sectionFive/4.png";
import five from "../../../../../assets/images/liquid-painting/sectionFive/5.png";
import six from "../../../../../assets/images/liquid-painting/sectionFive/6.png";
import seven from "../../../../../assets/images/liquid-painting/sectionFive/7.jpg";
import eight from "../../../../../assets/images/liquid-painting/sectionFive/8.jpg";
import nine from "../../../../../assets/images/liquid-painting/sectionFive/9.jpg";
import ten from "../../../../../assets/images/liquid-painting/sectionFive/10.jpg";
import eleven from "../../../../../assets/images/liquid-painting/sectionFive/11.jpg";
import twelve from "../../../../../assets/images/liquid-painting/sectionFive/12.jpg";

import SwiperExamplesWork from "../../../../swiper-examples-work/swiper-examples-work-container";

const SectionFive = () => {
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
        {image: ten, imageAlt: "ten"},
        {image: eleven, imageAlt: "eleven"},
        {image: twelve, imageAlt: "twelve"},
    ]

    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFiveCss.content}>
                    <h1 className={sectionFiveCss.titleExampleWorks}>Примеры работ</h1>
                </div>
            </div>
        </div>
        <div className={sectionFiveCss.swiper}>
            <SwiperExamplesWork slidesInfo={slides}/>
        </div>
    </section>
}

export default SectionFive;

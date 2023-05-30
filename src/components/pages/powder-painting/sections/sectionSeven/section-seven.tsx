import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSevenCss from "./section-sevenCss.module.css"

import first from "../../../../../assets/images/powder-painting/sectionSeven/1.jpg";
import second from "../../../../../assets/images/powder-painting/sectionSeven/2.jpg";
import third from "../../../../../assets/images/powder-painting/sectionSeven/3.jpg";
import four from "../../../../../assets/images/powder-painting/sectionSeven/4.jpg";
import five from "../../../../../assets/images/powder-painting/sectionSeven/5.jpg";
import six from "../../../../../assets/images/powder-painting/sectionSeven/6.jpg";
import seven from "../../../../../assets/images/powder-painting/sectionSeven/7.jpg";
import eight from "../../../../../assets/images/powder-painting/sectionSeven/8.jpg";
import nine from "../../../../../assets/images/powder-painting/sectionSeven/9.jpg";
import ten from "../../../../../assets/images/powder-painting/sectionSeven/10.jpg";
import eleven from "../../../../../assets/images/powder-painting/sectionSeven/11.jpg";
import twelve from "../../../../../assets/images/powder-painting/sectionSeven/12.jpg";

import SwiperExamplesWork from "../../../../swiper-examples-work/swiper-examples-work-container";

const SectionSeven = () => {
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
                <div className={sectionSevenCss.content}>
                    <h1 className={sectionSevenCss.titleExampleWorks}>Примеры работ</h1>
                </div>
            </div>
        </div>
        <div className={sectionSevenCss.swiper}>
            <SwiperExamplesWork slidesInfo={slides}/>
        </div>
    </section>
}

export default SectionSeven;

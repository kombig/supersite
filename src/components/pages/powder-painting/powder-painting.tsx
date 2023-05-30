import React from 'react';

import powderPaintingCss from "./powder-paintingCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionSecond from "./sections/sectionSecond/section-second";
import SectionFour from "./sections/sectionFour/section-four";
import SectionFive from "./sections/sectionFive/section-five-container";
import SectionSeven from "./sections/sectionSeven/section-seven";
import SectionSix from "./sections/sectionSix/section-six";
import SectionThird from "./sections/sectionThird/section-third";

const PowderPainting = () => {
    return <>
        <Header/>
        <div className={powderPaintingCss.bothBCGWithOut}>
            <div className={powderPaintingCss.bothBCG}>
                <SectionFirst/>
                <SectionSecond/>
            </div>
            <SectionThird/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
        </div>
    </>
}

export default PowderPainting;

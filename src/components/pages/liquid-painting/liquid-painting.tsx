import React from 'react';
import liquidPaintingCss from "./liquid-paintingCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first-container";
import SectionSecond from "./sections/sectionSecond/section-second";
import SectionThird from "./sections/sectionThird/section-third-container";
import SectionFour from "./sections/sectionFour/section-four";
import SectionFive from "./sections/sectionFive/section-five";

const LiquidPainting = () => {
    return <>
        <Header/>
        <div className={liquidPaintingCss.bothBCG}>
            <SectionFirst/>
            <SectionSecond/>
            <SectionThird/>
            <SectionFour/>
            <SectionFive/>
        </div>
    </>
}

export default LiquidPainting;

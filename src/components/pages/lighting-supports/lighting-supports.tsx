import React from 'react';

import metalForgingCss from "./lighting-supportsCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionEight from "./sections/sectionEight/section-eight";
import SectionSecond from "./sections/sectionSecond/section-second";
import SectionThird from "./sections/sectionThird/section-third";
import SectionFour from "./sections/sectionFour/section-four";
import SectionFive from "./sections/sectionFive/section-five";
import SectionSix from "./sections/sectionSix/section-six";
import SectionSeven from "./sections/sectionSeven/section-seven";

const LightingSupports = () => {
    return <>
        <Header/>
        <div className={metalForgingCss.bothBCG}>
            <SectionFirst/>
            <SectionSecond/>
            <SectionThird/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
        </div>
    </>
}

export default LightingSupports;

import React from 'react';

import laserCuttingCss from "./laser-cuttingCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionSecond from "./sections/sectionSecond/section-second";
import SectionThird from "./sections/sectionThird/section-third";

const MetalForging = () => {
    return <>
        <Header/>
        <div className={laserCuttingCss.bothBCG}>
            <SectionFirst/>
            <SectionSecond/>
            <SectionThird/>
        </div>
    </>
}

export default MetalForging;

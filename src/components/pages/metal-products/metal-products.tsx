import React from 'react';

import metalProductsCss from "./metal-productsCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionSecond from "./sections/sectionSecond/section-second";
import SectionThird from "./sections/sectionThird/section-third";
import SectionFour from "./sections/sectionFour/section-four";
import SectionFive from "./sections/sectionFive/section-five";

const MetalProducts = () => {
    return <>
        <Header/>
        <div className={metalProductsCss.bothBCGWithOut}>
            <div className={metalProductsCss.bothBCGFirst}>
                <SectionFirst/>
                <SectionSecond/>
            </div>
            <div className={metalProductsCss.bothBCGSecond}>
                <SectionThird/>
                <SectionFour/>
            </div>
            <SectionFive/>
        </div>
    </>
}

export default MetalProducts;

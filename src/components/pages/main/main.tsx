import React from 'react';

import mainCss from "./mainCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionSecond from "./sections/sectionSecond/section-second";

const Main = () => {
    return <>
        <Header/>
        <div className={mainCss.bothBCG}>
            <SectionFirst/>
            <SectionSecond/>
        </div>
    </>
}

export default Main;

import React from 'react';

import cuttingPipesCss from "./cutting-pipesCss.module.css"

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionSecond from "./sections/sectionSecond/section-second-container";

const CuttingPipes = () => {
    return <>
        <Header/>
        <div className={cuttingPipesCss.bothBCG}>
            <SectionFirst/>
            <SectionSecond/>
        </div>
    </>
}

export default CuttingPipes;

import React from 'react';
import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";
import SectionSecond from "./sections/sectionSecond/section-second";
import sandBlastingCss from "./sand-blastingCss.module.css"

const SandBlasting = () => {
    return <>
        <Header/>
        <div className={sandBlastingCss.bothBCG}>
            <SectionFirst/>
            <SectionSecond/>
        </div>
    </>
}

export default SandBlasting;

import React from 'react';
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFourCss from "./section-fourCss.module.css";

import ReactCompareImage from "react-compare-image";

import painted from "../../../../../assets/images/liquid-painting/sectionFour/painted.png";
import notPainted from "../../../../../assets/images/liquid-painting/sectionFour/not painted.png";

const SectionFour = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFourCss.content}>
                    <h1 className={sectionFourCss.titleBeforeAfter}>До и после</h1>
                    <div className={sectionFourCss.sliderBeforeAfter}>
                        <ReactCompareImage hover={true} leftImage={painted.src} rightImage={notPainted.src}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFour;

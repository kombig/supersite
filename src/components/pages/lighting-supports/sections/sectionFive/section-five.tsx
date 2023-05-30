import React from 'react';
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFiveCss from "./section-fiveCss.module.css";

import ReactCompareImage from "react-compare-image";

import painted from "../../../../../assets/images/lighting-supports/sectionFive/painted.png";
import notPainted from "../../../../../assets/images/lighting-supports/sectionFive/not painted.png";

const SectionFive = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFiveCss.content}>
                    <h1 className={sectionFiveCss.titleBeforeAfter}>Горячее цинкование</h1>
                    <div className={sectionFiveCss.sliderBeforeAfter}>
                        <ReactCompareImage hover={true} leftImage={painted.src} rightImage={notPainted.src}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFive;

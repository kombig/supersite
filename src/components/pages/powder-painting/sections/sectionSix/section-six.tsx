import React from 'react';
import ReactCompareImage from 'react-compare-image';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSixCss from "./section-sixCss.module.css";

import painted from "../../../../../assets/images/powder-painting/sectionSix/painted.png"
import notPainted from "../../../../../assets/images/powder-painting/sectionSix/not painted.png"

const SectionSix = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSixCss.content}>
                    <h1 className={sectionSixCss.titleBeforeAfter}>До и после</h1>
                    <div className={sectionSixCss.sliderBeforeAfter}>
                        <ReactCompareImage hover={true} leftImage={painted.src} rightImage={notPainted.src}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSix;

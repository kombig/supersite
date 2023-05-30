import React from 'react';
import ReactCompareImage from "react-compare-image";
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import rust from "../../../../../assets/images/sand-blasting/sectionSecond/rust.png"
import unrust from "../../../../../assets/images/sand-blasting/sectionSecond/unrust.png"

const SectionSecond = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSecondCss.content}>
                    <h1 className={sectionSecondCss.titleBeforeAfter}>До и после</h1>
                    <div className={sectionSecondCss.sliderBeforeAfter}>
                        <ReactCompareImage hover={true} leftImage={unrust.src} rightImage={rust.src}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSecond;

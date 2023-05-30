import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFourCss from "./section-fourCss.module.css";

import poster from "../../../../../assets/images/metal-products/sectionFour/poster.jpg"

const SectionFour = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFourCss.content}>
                    <div className={sectionFourCss.video}>
                        <video controls={true} playsInline={true} autoPlay={true} loop={true} poster={poster.src}>
                            <source
                                src={"/videos/2.mp4"}
                                type={'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}/>
                            <source src="/videos/2.webm"
                                    type={'video/webm; codecs="vp8, vorbis"'}/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFour;

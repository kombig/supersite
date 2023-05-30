import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import first from "../../../../../assets/images/laser-cutting/sectionSecond/1.png"
import second from "../../../../../assets/images/laser-cutting/sectionSecond/2.png"
import third from "../../../../../assets/images/laser-cutting/sectionSecond/3.png"
import four from "../../../../../assets/images/laser-cutting/sectionSecond/4.png"

import poster from "../../../../../assets/images/laser-cutting/sectionSecond/poster.png";
import ListFourElementsTwoTwo from "../../../../list-four-elements-two-two/list-four-elements-two-two";
import ListFourElementsTwoTwoItem
    from "../../../../list-four-elements-two-two/list-four-elements-two-two-item/list-four-elements-two-two-item";

const SectionSecond = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSecondCss.content}>
                    <h1 className={sectionSecondCss.title}>Лазерная резка металлов</h1>
                    <ListFourElementsTwoTwo>
                        <ListFourElementsTwoTwoItem title={"Сталь"} image={first}
                                                    imageAlt={"steel"}/>
                        <ListFourElementsTwoTwoItem title={"Алюминий"} image={second}
                                                    imageAlt={"aluminum"}/>
                        <ListFourElementsTwoTwoItem title={"Нержавейка"} image={third}
                                                    imageAlt={"stainless steel"}/>
                        <ListFourElementsTwoTwoItem title={"Цветной металл"} image={four}
                                                    imageAlt={"non-ferrous metal"}/>
                    </ListFourElementsTwoTwo>
                    <div className={sectionSecondCss.videoWrapper}>
                        <div className={sectionSecondCss.video}>
                            <video controls={true} playsInline={true} poster={poster.src} loop={true}
                                   autoPlay={true} muted={true}>
                                <source
                                    src={"/videos/3.mp4"}
                                    type={'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}/>
                                <source src="/videos/3.webm"
                                        type={'video/webm; codecs="vp8, vorbis"'}/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSecond;

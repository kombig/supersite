import React from 'react';
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import first from "../../../../../assets/images/lighting-supports/sectionSecond/1.svg";
import second from "../../../../../assets/images/lighting-supports/sectionSecond/2.svg";
import third from "../../../../../assets/images/lighting-supports/sectionSecond/3.svg";
import four from "../../../../../assets/images/lighting-supports/sectionSecond/4.svg";
import ListFourElementsTwoTwo from "../../../../list-four-elements-two-two/list-four-elements-two-two";
import ListFourElementsTwoTwoItem
    from "../../../../list-four-elements-two-two/list-four-elements-two-two-item/list-four-elements-two-two-item";

const SectionSecond = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <h1 className={sectionSecondCss.title}>Этапы производства</h1>
                <ListFourElementsTwoTwo>
                    <ListFourElementsTwoTwoItem title={"Разработка чертежей"} image={first}
                                                imageAlt={"development of drawings"}/>
                    <ListFourElementsTwoTwoItem title={"Изготовление конструкций"} image={second}
                                                imageAlt={"manufacturing construction"}/>
                    <ListFourElementsTwoTwoItem title={"Обработка металла"} image={third}
                                                imageAlt={"metal processing"}/>
                    <ListFourElementsTwoTwoItem title={"Покраска опор"} image={four} imageAlt={"painting of supports"}/>
                </ListFourElementsTwoTwo>
            </div>
        </div>
    </section>
}

export default SectionSecond;

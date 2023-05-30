import React from 'react';
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";
import first from "../../../../../assets/images/liquid-painting/sectionSecond/1.svg";
import second from "../../../../../assets/images/liquid-painting/sectionSecond/2.svg";
import third from "../../../../../assets/images/liquid-painting/sectionSecond/3.svg";
import four from "../../../../../assets/images/liquid-painting/sectionSecond/4.svg";
import ListFourElementsTwoTwo from "../../../../list-four-elements-two-two/list-four-elements-two-two";
import ListFourElementsTwoTwoItem
    from "../../../../list-four-elements-two-two/list-four-elements-two-two-item/list-four-elements-two-two-item";

const SectionSecond = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <h1 className={sectionSecondCss.title}>Преимущества покраски</h1>
                <ListFourElementsTwoTwo>
                    <ListFourElementsTwoTwoItem title={"Защита от коррозии"} image={first}
                                                imageAlt={"corrosion protection"}/>
                    <ListFourElementsTwoTwoItem title={"Повышенная прочность"} image={second}
                                                imageAlt={"increased strength"}/>
                    <ListFourElementsTwoTwoItem title={"Увеличенный срок службы"} image={third}
                                                imageAlt={"extended service life"}/>
                    <ListFourElementsTwoTwoItem title={"Эстетический вид"} image={four}
                                                imageAlt={"aesthetic appearance"}/>
                </ListFourElementsTwoTwo>
            </div>
        </div>
    </section>
}

export default SectionSecond;

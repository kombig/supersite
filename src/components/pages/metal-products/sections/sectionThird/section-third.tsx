import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionThirdCss from "./section-thirdCss.module.css";

import first from "../../../../../assets/images/metal-products/sectionThird/1.png"
import second from "../../../../../assets/images/metal-products/sectionThird/2.png"
import third from "../../../../../assets/images/metal-products/sectionThird/3.png"

import ListOfAdvantages from "../../../../list-of-advantages/list-of-advantages";
import ListOfAdvantagesItem
    from "../../../../list-of-advantages/list-of-advantages-item/list-of-advantages-item";

const SectionThird = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionThirdCss.content}>
                    <h1 className={sectionThirdCss.titleAdvantages}>Преимущества</h1>
                    <div className={sectionThirdCss.advantages}>
                        <ListOfAdvantages>
                            <ListOfAdvantagesItem title={"Производственная площадь 3000м²"} image={first}
                                                  imageAlt={"first"}/>
                            <ListOfAdvantagesItem title={"Производство работает в круглосуточном режиме"} image={second}
                                                  imageAlt={"second"}/>
                            <ListOfAdvantagesItem title={"Загрузка/Разгрузка осуществляется кран-балкой"} image={third}
                                                  imageAlt={"third"}/>
                        </ListOfAdvantages>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionThird;

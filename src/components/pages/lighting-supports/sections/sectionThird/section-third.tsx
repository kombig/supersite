import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionThirdCss from "./section-thirdCss.module.css";

import ListOfProducts from "../../../../list-of-products/list-of-products";
import ListOfProductsItem from "../../../../list-of-products/list-of-products-item/list-of-products-item";

import first from "../../../../../assets/images/lighting-supports/sectionThird/1.png"
import second from "../../../../../assets/images/lighting-supports/sectionThird/2.png"
import third from "../../../../../assets/images/lighting-supports/sectionThird/3.png"
import four from "../../../../../assets/images/lighting-supports/sectionThird/4.png"
import five from "../../../../../assets/images/lighting-supports/sectionThird/5.png"
import six from "../../../../../assets/images/lighting-supports/sectionThird/6.png"

const SectionThird = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionThirdCss.content}>
                    <h1 className={sectionThirdCss.title}>Опоры освещения</h1>
                    <ListOfProducts>
                        <ListOfProductsItem title={"Опора граненная силовая"} image={first}
                                            imageAlt={"first"}/>
                        <ListOfProductsItem
                            title={"Опора круглая коническая"} image={second}
                            imageAlt={"second"}/>
                        <ListOfProductsItem title={"Опора квартальная изогнутая"} image={third}
                                            imageAlt={"third"}/>
                        <ListOfProductsItem
                            title={"Опора коническая изогнутая"} image={four}
                            imageAlt={"four"}/>
                        <ListOfProductsItem title={"Опоры граненные силовые контактной сети"} image={five}
                                            imageAlt={"five"}/>
                        <ListOfProductsItem
                            title={"Опоры круглоконические силовые"} image={six}
                            imageAlt={"six"}/>
                    </ListOfProducts>
                </div>
            </div>
        </div>
    </section>
}

export default SectionThird;

import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import ListOfProducts from "../../../../list-of-products/list-of-products";
import ListOfProductsItem from "../../../../list-of-products/list-of-products-item/list-of-products-item";

import first from "../../../../../assets/images/metal-products/sectionSecond/1.jpg"
import second from "../../../../../assets/images/metal-products/sectionSecond/2.jpg"
import third from "../../../../../assets/images/metal-products/sectionSecond/3.jpg"
import four from "../../../../../assets/images/metal-products/sectionSecond/4.jpg"
import five from "../../../../../assets/images/metal-products/sectionSecond/5.jpg"
import six from "../../../../../assets/images/metal-products/sectionSecond/6.jpg"
import seven from "../../../../../assets/images/metal-products/sectionSecond/7.jpg"
import eight from "../../../../../assets/images/metal-products/sectionSecond/8.jpg"
import nine from "../../../../../assets/images/metal-products/sectionSecond/9.jpg"

const SectionSecond = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSecondCss.content}>
                    <ListOfProducts>
                        <ListOfProductsItem title={"Заборы, ограждения"} image={first}
                                            imageAlt={"first"}/>
                        <ListOfProductsItem
                            title={"Декоративные решётки"} image={second}
                            imageAlt={"second"}/>
                        <ListOfProductsItem title={"Нестандартные м/к"} image={third}
                                            imageAlt={"third"}/>
                        <ListOfProductsItem
                            title={"Индивидуальные изделия"} image={four}
                            imageAlt={"four"}/>
                        <ListOfProductsItem title={"Камины"} image={five}
                                            imageAlt={"five"}/>
                        <ListOfProductsItem
                            title={"Мангалы"} image={six}
                            imageAlt={"six"}/>
                        <ListOfProductsItem
                            title={"Корпусная мебель"} image={seven}
                            imageAlt={"seven"}/>
                        <ListOfProductsItem
                            title={"Навесы"} image={eight}
                            imageAlt={"eight"}/>
                        <ListOfProductsItem
                            title={"Каркасы"} image={nine}
                            imageAlt={"nine"}/>
                    </ListOfProducts>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSecond;

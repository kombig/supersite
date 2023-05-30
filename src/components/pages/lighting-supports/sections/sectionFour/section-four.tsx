import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFourCss from "./section-fourCss.module.css";

import ListOfProducts from "../../../../list-of-products/list-of-products";
import ListOfProductsItem from "../../../../list-of-products/list-of-products-item/list-of-products-item";

import first from "../../../../../assets/images/lighting-supports/sectionFour/1.png"
import second from "../../../../../assets/images/lighting-supports/sectionFour/2.png"
import third from "../../../../../assets/images/lighting-supports/sectionFour/3.png"

const SectionFour = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFourCss.content}>
                    <h1 className={sectionFourCss.title}>Закладная деталь</h1>
                    <ListOfProducts>
                        <ListOfProductsItem title={"Фундамент металлический (квадратный фланец)"} image={first}
                                            imageAlt={"first"}/>
                        <ListOfProductsItem
                            title={"Закладной фундамент (круглый фланец)"} image={second}
                            imageAlt={"second"}/>
                        <ListOfProductsItem title={"Фундамент металлический (под кабельный ввод)"} image={third}
                                            imageAlt={"third"}/>
                    </ListOfProducts>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFour;
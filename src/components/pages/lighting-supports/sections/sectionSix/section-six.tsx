import React from 'react';
import Image from "next/image";

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSixCss from "./section-sixCss.module.css";

import price from "../../../../../assets/images/lighting-supports/sectionSix/price.png";

const SectionSix = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSixCss.content}>
                    <h1 className={sectionSixCss.title}>Прайс-лист</h1>
                    <a href={"./price-list.pdf"} target={"_blank"} rel="noreferrer" className={sectionSixCss.priceList}>
                        <Image src={price} alt={"price list"}/>
                        <div>
                            <div>
                                <p>Открыть<br/>Прайс-лист</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSix;

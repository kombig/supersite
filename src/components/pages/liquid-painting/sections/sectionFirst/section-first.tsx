import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

import Image, {StaticImageData} from "next/image"

type propTypes = {
    liquidPaintingPhoto: StaticImageData
}

const sectionFirst: React.FC<propTypes> = ({liquidPaintingPhoto}) => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <div className={sectionFirstCss.text}>
                        <h1 className={sectionFirstCss.titleLiquidPainting}>Жидкая покраска</h1>
                        <ul className={sectionFirstCss.listOfLiquidPainting}>
                            <li><p>Мы предоставляем услуги по покраске металлических поверхностей любых размеров и
                                сложности. Наша команда опытных специалистов обладает всем необходимым оборудованием и
                                знаниями для того, чтобы сделать ваше металлическое изделие совершенным.</p></li>
                            <li><p>Мы работаем с различными типами металла, в том числе с алюминием, сталью, чугуном и
                                другими. Мы предлагаем широкий выбор качественных жидких красок, которые обеспечивают
                                долговечность и стойкость покрытия.</p>
                            </li>
                            <li><p>Мы также предоставляем услуги подготовки поверхности перед нанесением краски, что
                                позволяет обеспечить максимальную степень адгезии и прочности покрытия.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={sectionFirstCss.img}>
                        <Image src={liquidPaintingPhoto} alt={"liquidPainting"}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default sectionFirst;

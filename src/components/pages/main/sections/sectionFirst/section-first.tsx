import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

import productionOfMetalStructures from "../../../../../assets/images/main/sectionFirst/1.jpg"
import powderCoating from "../../../../../assets/images/main/sectionFirst/2.jpg"
import sandblasting from "../../../../../assets/images/main/sectionFirst/3.jpg"
import pipeCutting from "../../../../../assets/images/main/sectionFirst/4.jpg"
import lightingSupports from "../../../../../assets/images/main/sectionFirst/5.jpg"
import laserCutting from "../../../../../assets/images/main/sectionFirst/6.png"
import liquidPainting from "../../../../../assets/images/main/sectionFirst/7.jpg"

import OurServicesItem from "../../../../our-services-item/our-services-item";

const SectionFirst = () => {
    return <section className={sectionFirstCss.ourServicesWrapper}>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <h1 className={sectionFirstCss.titleOurServices}>Наши услуги</h1>
                    <div className={sectionFirstCss.servicesWrapper}>
                        <div className={sectionFirstCss.laserCutting}>
                            <OurServicesItem image={laserCutting} altImage={"Laser cutting"}
                                             rightImage={true}
                                             title={"Лазерная резка"}
                                             link={"/laser-cutting"}
                                             description={"Лазерная резка включает в себя резку материала высокоточным лазером, таких металлов как сталь, алюминий, нержавейка и цветные металлы. Лазерный луч точечно направляется на материал, где его необходимо разрезать. Мощность лазера позволяет резать пластину толщиной до 10 мм."}/>
                        </div>
                        <div className={sectionFirstCss.productionOfMetalStructures}>
                            <OurServicesItem image={productionOfMetalStructures}
                                             altImage={"Production of metal structures"}
                                             title={"Изготовление металлоконструкций"}
                                             link={"/metal-products"}
                                             description={"Наша компания предлагает услуги по проектированию и монтажу металлконструкций любых размеров и сложности по вашим чертежам из различных видов стали, черного и цветного металла."}/>
                        </div>
                        <div className={sectionFirstCss.powderCoating}>
                            <OurServicesItem image={powderCoating} altImage={"Powder coating"}
                                             rightImage={true}
                                             title={"Порошковая покраска"}
                                             link={"/powder-painting"}
                                             description={"Одним из основных направлений работы компании «Спецколор» является порошковая покраска металлических изделий. В нашем покрасочном цехе осуществляется порошковая окраска изделий из металла, нержавеющей стали, черного металла, алюминия, а также нестандартны габаритных листовых изделий. Ключевой особенностью нашей услуги является возможность красить практически любые негабаритные металлоизделия."}/>
                        </div>
                        <div className={sectionFirstCss.sandblasting}>
                            <OurServicesItem image={sandblasting} altImage={"Sandblasting"}
                                             rightImage={true}
                                             link={"/sand-blasting"}
                                             title={"Пескоструйная обработка"}
                                             description={"Для очистки и подготовки поверхностей перед нанесением покрытий, используется пескоструйная среда. Пескоструйная обработка является важной частью подготовки поверхности перед нанесением покрытий. Процесс пескоструйной обработки удаляет загрязнения, ржавчину и нежелательные вещества с поверхности изделия, чтобы получить чистую поверхность, которая будет способствовать к конечному покрытию."}/>
                        </div>
                        <div className={sectionFirstCss.pipeCutting}>
                            <OurServicesItem image={pipeCutting} altImage={"Pipe cutting"} title={"Резка труб"}
                                             link={"/cutting-pipes"}
                                             description={"Для большинства сфер производства и строительства важен такой технологический процесс как резка металлических изделий на отдельные заготовки. Мы осуществляем резку труб различного диаметра. Все работы производятся на самом современном оборудовании высококвалифицированными специалистами."}/>
                        </div>
                        <div className={sectionFirstCss.lightingSupports}>
                            <OurServicesItem image={lightingSupports} rightImage={true} altImage={"Lighting supports"}
                                             title={"Опоры освещения"}
                                             link={"/lighting-supports"}
                                             description={"При изготовлении опор освещения необходимо учитывать множество факторов. Только правильно изготовленные опоры освещения способны обеспечить надежность и долговечность, а также качественную и безопасную работу осветительных приборов. Поэтому, если вы ищете надежного партнера для изготовления опор освещения, обращайтесь к профессионалам, которые гарантируют качество и надежность своей работы."}/>
                        </div>
                        <div className={sectionFirstCss.liquidPainting}>
                            <OurServicesItem image={liquidPainting} altImage={"Liquid painting"}
                                             title={"Жидкая покраска"}
                                             link={"/liquid-painting"}
                                             description={"Мы предоставляем услуги по покраске металлических поверхностей любых размеров и сложности. Наша команда опытных специалистов обладает всем необходимым оборудованием и знаниями для того, чтобы сделать ваше металлическое изделие совершенным. Независимо от того, нужна ли вам покраска металла для обновления или защиты, мы готовы предоставить вам нашу экспертизу и опыт."}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFirst;

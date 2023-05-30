import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFourCss from "./section-fourCss.module.css"

import StagesOfPainting from "../../../../stages-of-painting/stages-of-painting";
import StagesOfPaintingItem
    from "../../../../stages-of-painting/stages-of-painting-item/stages-of-painting-item-container";

import preliminaryPreparation from "../../../../../assets/images/powder-painting/sectionFour/1.png"
import phosphating from "../../../../../assets/images/powder-painting/sectionFour/2.png"
import intermediateDrying from "../../../../../assets/images/powder-painting/sectionFour/3.png"
import powderCoatingApplication from "../../../../../assets/images/powder-painting/sectionFour/4.png"
import polymerization from "../../../../../assets/images/powder-painting/sectionFour/5.png"
import packaging from "../../../../../assets/images/powder-painting/sectionFour/6.png"

const SectionFour = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFourCss.content}>
                    <h1 className={sectionFourCss.titleStagesOfPainting}>Этапы покраски</h1>
                    <StagesOfPainting>
                        <StagesOfPaintingItem title={"Предварительная подготовка"} img={preliminaryPreparation}
                                              alt={"preliminaryPreparation"}/>
                        <StagesOfPaintingItem title={"Фосфатирование"} img={phosphating}
                                              alt={"phosphating"} top={true}/>
                        <StagesOfPaintingItem title={"Промежуточная сушка"} img={intermediateDrying}
                                              alt={"intermediateDrying"}/>
                        <StagesOfPaintingItem title={"Нанесение порошкового покрытия"} img={powderCoatingApplication}
                                              alt={"powderCoatingApplication"} top={true}
                                              className={sectionFourCss.stageOfPaintingItemWidth}/>
                        <StagesOfPaintingItem title={"Полимеризация"} img={polymerization}
                                              alt={"polymerization"}/>
                        <StagesOfPaintingItem title={"Упаковка"} img={packaging}
                                              alt={"packaging"} top={true}/>
                    </StagesOfPainting>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFour;

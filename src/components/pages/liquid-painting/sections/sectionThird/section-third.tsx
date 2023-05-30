import React from 'react';
import appCss from "../../../../../general_styles/appCss.module.css";
import sectionThirdCss from "./section-thirdCss.module.css";

import TabsOfColor from "../../../../tabs-of-color/tabs-of-color-container";

type tabPanesColorType = {
    title: string,
    titleColor?: string,
    backgroundColor?: string
}

type tabPanes = {
    tabName: string,
    tabPanes: Array<tabPanesColorType>
}

type propTypes = {
    tabPanes: Array<tabPanes>
}

const SectionThird: React.FC<propTypes> = ({tabPanes}) => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionThirdCss.content}>
                    <h1 className={sectionThirdCss.titleTabsOfColor}>Карта цветов RAL</h1>
                    <TabsOfColor tabs={tabPanes}/>
                </div>
            </div>
        </div>
    </section>
}

export default SectionThird;

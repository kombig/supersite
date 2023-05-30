import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFiveCss from "./section-fiveCss.module.css"

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

const SectionFive: React.FC<propTypes> = ({tabPanes}) => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFiveCss.content}>
                    <h1 className={sectionFiveCss.titleTabsOfColor}>Карта цветов RAL</h1>
                    <TabsOfColor tabs={tabPanes}/>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFive;

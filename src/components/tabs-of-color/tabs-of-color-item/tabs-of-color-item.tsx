import React from 'react';

import tabsOfColorItemCss from "./tabs-of-color-itemCss.module.css"

type propTypes = {
    title: string,
    titleColor?: string,
    backgroundColor?: string
}

const TabsOfColorItem: React.FC<propTypes> = ({backgroundColor = "#962222", title, titleColor = "#FFFFFF"}) => {
    return <div style={{backgroundColor: backgroundColor}} className={tabsOfColorItemCss.item}>
        <p style={{color: titleColor}} className={tabsOfColorItemCss.itemTitle}>{title}</p>
    </div>
}

export default TabsOfColorItem;

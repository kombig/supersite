import React from 'react';

import TabsOfColorItem from "./tabs-of-color-item/tabs-of-color-item";
import TabsOfColor from "./tabs-of-color";

import {Tabs} from 'antd';

const {TabPane} = Tabs;

type propTabPaneTypes = {
    title: string,
    titleColor?: string,
    backgroundColor?: string
}

type propTabTypes = { tabName: string, tabPanes: Array<propTabPaneTypes> }

type propTypes = {
    tabs: Array<propTabTypes>
}

const TabsOfColorContainer: React.FC<propTypes> = ({tabs}) => {
    const tabPanes = tabs.map((tab, tabIndex) => {
        const tabItemsColor = tab.tabPanes.map((tabPane, tabPaneIndex) => {
            return <TabsOfColorItem key={tabPaneIndex} title={tabPane.title} titleColor={tabPane.titleColor}
                                    backgroundColor={tabPane.backgroundColor}/>
        })

        return <TabPane key={tabIndex+1} tab={tab.tabName}>
            {tabItemsColor}
        </TabPane>
    })

    return <TabsOfColor tabPanes={tabPanes}/>
}

export default TabsOfColorContainer;

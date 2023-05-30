import React from 'react';

import {Tabs} from 'antd';

type propTypes = {
    tabPanes: Array<JSX.Element>
}

const TabsOfColor: React.FC<propTypes> = ({tabPanes}) => {
    return <Tabs className={"tabsColor"} defaultActiveKey={"2"} centered>
        {tabPanes}
    </Tabs>
}

export default TabsOfColor;

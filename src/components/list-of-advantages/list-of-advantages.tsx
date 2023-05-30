import React, {ReactNode} from 'react';

import listOfAdvantagesCss from "./list-of-advantagesCss.module.css"

type propTypes = {
    children: Array<ReactNode> | ReactNode
}

const ListOfAdvantages: React.FC<propTypes> = ({children}) => {
    return <div className={listOfAdvantagesCss.list}>
        {children}
    </div>
}

export default ListOfAdvantages;

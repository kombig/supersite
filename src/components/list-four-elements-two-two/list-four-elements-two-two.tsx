import React, {ReactNode} from 'react';

import listFourElementsTwoTwoCss from "./list-four-elements-two-twoCss.module.css";

type propTypes = {
    children: Array<ReactNode> | ReactNode
}

const ListFourElementsTwoTwo: React.FC<propTypes> = ({children}) => {
    return <div className={listFourElementsTwoTwoCss.wrapper}>
        {children}
    </div>
}

export default ListFourElementsTwoTwo;

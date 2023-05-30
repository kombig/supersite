import React, {ReactNode} from 'react';

import listOfContactsCss from "./list-of-contactsCss.module.css"

type propTypes = {
    children: Array<ReactNode> | ReactNode
}

const ListOfContacts: React.FC<propTypes> = ({children}) => {
    return <ul className={listOfContactsCss.list}>
        {children}
    </ul>
}

export default ListOfContacts;

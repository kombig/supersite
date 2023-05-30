import React, {ReactNode} from 'react';

import listOfProductsCss from  "./list-of-productsCss.module.css"

type propTypes = {
    children: Array<ReactNode> | ReactNode
}

const ListOfProducts: React.FC<propTypes> = ({children}) => {
    return <div className={listOfProductsCss.list}>
        {children}
    </div>
}

export default ListOfProducts;

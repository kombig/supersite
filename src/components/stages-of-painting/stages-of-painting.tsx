import React, {ReactNode} from 'react';

import stagesOfPaintingCss from "./stages-of-paintingCss.module.css";

type propTypes = {
    children: Array<ReactNode>
}

const StagesOfPainting: React.FC<propTypes> = ({children}) => {
    return <div className={stagesOfPaintingCss.stagesOfPainting}>
        {children}
    </div>
}

export default StagesOfPainting;

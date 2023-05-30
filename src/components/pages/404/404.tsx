import React from "react";
import SectionFirst from "./sectionFisrt/sectionFirst";

import error404Css from "./404.module.css";

type propTypes = {
    style: { height: string }
}

const Custom404: React.FC<propTypes> = ({style}) => {
    return <section style={style} className={error404Css.bothBCG}>
        <SectionFirst/>
    </section>
}

export default Custom404;

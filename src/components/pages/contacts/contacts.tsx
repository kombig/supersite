import React from 'react';

import contactsCss from "./contactsCss.module.css";

import Header from "./sections/header/header";
import SectionFirst from "./sections/sectionFirst/section-first";

const Contacts = () => {
    return <>
        <div className={contactsCss.bothBCG}>
            <Header/>
            <SectionFirst/>
        </div>
    </>
}

export default Contacts;

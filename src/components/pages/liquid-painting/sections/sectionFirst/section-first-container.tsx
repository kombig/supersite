import React from 'react';
import {useMediaQuery} from 'react-responsive';

import liquidPainting from "../../../../../assets/images/liquid-painting/sectionFirst/1.jpg"
import liquidPaintingSecond from "../../../../../assets/images/liquid-painting/sectionFirst/2.jpg"

import SectionFirst from "./section-first";


const sectionFirstContainer = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isSecondPhoto = useMediaQuery({query: `(min-width: 1280px) and (max-width: 1400px)`});

    return <SectionFirst liquidPaintingPhoto={isSecondPhoto ? liquidPaintingSecond : liquidPainting}/>
}

export default sectionFirstContainer;

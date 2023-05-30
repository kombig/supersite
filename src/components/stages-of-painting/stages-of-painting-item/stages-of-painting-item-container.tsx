import React from 'react';

import stagesOfPaintingItemCss from "./stages-of-painting-itemCss.module.css";

import StagesOfPaintingItem from "./stages-of-painting-item";
import {StaticImageData} from "next/image";

type propTypes = {
    title: string,
    img: StaticImageData,
    alt: string,
    top?: boolean,
    className?: string
}


const StagesOfPaintingItemContainer: React.FC<propTypes> = ({title, img, alt, top, className}) => {
    const classNames = [stagesOfPaintingItemCss.stageItem];
    if (top) {
        classNames.push(stagesOfPaintingItemCss.stageItemTop)
    }

    if (className) {
        classNames.push(className);
    }

    return <StagesOfPaintingItem title={title} img={img} alt={alt} classNames={classNames.join(" ")}/>
}

export default StagesOfPaintingItemContainer;

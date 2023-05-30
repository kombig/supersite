import React from 'react';

import stagesOfPaintingItemCss from "./stages-of-painting-itemCss.module.css";

import Image, {StaticImageData} from "next/image"

type propTypes = {
    title: string,
    img: StaticImageData,
    alt: string,
    classNames: string
}

const StagesOfPaintingItem: React.FC<propTypes> = ({title, img, alt, classNames}) => {
    return <div className={classNames}>
        <p className={stagesOfPaintingItemCss.stageTitle}>{title}</p>
        <div className={stagesOfPaintingItemCss.stageImg}><Image src={img} alt={alt}/></div>
    </div>
}

export default StagesOfPaintingItem;

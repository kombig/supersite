import React from 'react';

import swiperExamplesWorkItemCss from "./swiper-examples-work-itemCss.module.css"

import Image, {StaticImageData} from "next/image"

type propTypes = {
    image: StaticImageData,
    imageAlt: string
}

const SwiperExamplesWorkItem: React.FC<propTypes> = ({image, imageAlt}) => {
    return <div className={swiperExamplesWorkItemCss.item}><Image src={image} alt={imageAlt}/></div>
}

export default SwiperExamplesWorkItem;

import React from 'react';

import listOfAdvantagesItemCss from "./list-of-advantages-itemCss.module.css"

import Image, {StaticImageData} from "next/image"

type propTypes = {
    title: string,
    image: StaticImageData,
    imageAlt: string
}

const ListOfAdvantagesItem: React.FC<propTypes> = ({title, image, imageAlt}) => {
    return <div className={listOfAdvantagesItemCss.item}>
        <div><Image src={image} alt={imageAlt}/></div>
        <p>{title}</p>
    </div>
}

export default ListOfAdvantagesItem;

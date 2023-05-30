import React from 'react';

import Image, {StaticImageData} from "next/image"

import listFourElementsTwoTwoItemCss from "./list-four-elements-two-two-itemCss.module.css";

type propTypes = {
    title: string,
    image: StaticImageData,
    imageAlt: string
}

const ListFourElementsTwoTwoItem: React.FC<propTypes> = ({title, image, imageAlt}) => {
    return <div className={listFourElementsTwoTwoItemCss.item}>
        <div className={listFourElementsTwoTwoItemCss.itemPhoto}>
            <Image src={image} alt={imageAlt}/>
        </div>
        <div className={listFourElementsTwoTwoItemCss.itemTitle}>{title}</div>
    </div>
}

export default ListFourElementsTwoTwoItem;

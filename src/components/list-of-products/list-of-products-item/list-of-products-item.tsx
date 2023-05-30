import React from 'react';

import listOfProductsItemCss from "./list-of-products-itemCss.module.css"

import Image, {StaticImageData} from "next/image"

type propTypes = {
    title: string,
    image: StaticImageData,
    imageAlt: string
}

const ListOfProductsItem: React.FC<propTypes> = ({title, image, imageAlt}) => {
    return <div className={listOfProductsItemCss.item}>
        <div><Image src={image} alt={imageAlt}/></div>
        <p>{title}</p>
    </div>
}

export default ListOfProductsItem;

import React from 'react';

import listOfContactsItemCss from "./list-of-contacts-itemCss.module.css"

import Image, {StaticImageData} from "next/image"

type propTypes = {
    textHtml: string,
    image: StaticImageData,
    imageAlt: string
}

const ListOfContactsItem: React.FC<propTypes> = ({textHtml, image, imageAlt}) => {
    return <li className={listOfContactsItemCss.item}>
        <div><Image src={image} alt={imageAlt}/></div>
        <p dangerouslySetInnerHTML={{__html: textHtml}}/>
    </li>
}

export default ListOfContactsItem;

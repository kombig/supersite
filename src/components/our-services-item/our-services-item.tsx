import React from 'react';

import ourServicesItemCss from "./our-services-itemCss.module.css";

import Link from "next/link";
import Image, {StaticImageData} from "next/image";

type propTypes = {
    image: StaticImageData,
    altImage: string,
    rightImage?: boolean
    title: string,
    description: string,
    link: string
}

const OurServicesItem: React.FC<propTypes> = ({image, altImage, rightImage, title, description, link}) => {
    const classNamesService: Array<string> = [ourServicesItemCss.service]

    if (rightImage) classNamesService.push(ourServicesItemCss.serviceIMGRight)

    return <div
        className={classNamesService.join(" ")}>
        <div className={ourServicesItemCss.img}>
            <div className={"NImg"}><Image src={image} alt={altImage}/></div>
        </div>
        <div className={ourServicesItemCss.serviceDescriptionWrapper}>
            <div className={ourServicesItemCss.textWrapper}>
                <h2 className={ourServicesItemCss.serviceTitle}>{title}
                </h2>
                <p className={ourServicesItemCss.serviceDescription}>{description}
                </p>
                <Link href={link}>
                    <a><p className={ourServicesItemCss.detail}>Подробнее</p></a>
                </Link>
            </div>
        </div>
    </div>
}

export default OurServicesItem;

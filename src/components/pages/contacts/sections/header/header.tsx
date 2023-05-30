import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import headerCss from "./headerCss.module.css"

import painting from "../../../../../assets/images/contacts/header/painting.jpg"
import phone from "../../../../../assets/images/contacts/header/phone.svg"
import mail from "../../../../../assets/images/contacts/header/mail.svg"
import link from "../../../../../assets/images/contacts/header/link.svg"
import place from "../../../../../assets/images/contacts/header/place.svg"

import Image from "next/image"
import ListOfContacts from "../../../../list-of-contacts/list-of-contacts";
import ListOfContactsItem from "../../../../list-of-contacts/list-of-contacts-item/list-of-contacts-item";

const Header = () => {
    return <header className={headerCss.header}>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={headerCss.content}>
                    <div className={headerCss.text}>
                        <h1 className={headerCss.titleContacts}>Наши координаты</h1>
                        <ListOfContacts>
                            <ListOfContactsItem textHtml={"<a href='tel:+74950000000'>+7 (495) 000-00-00</a>"}
                                                image={phone} imageAlt={"Телефон"}/>
                            <ListOfContactsItem textHtml={"<a href='mailto:sc@workwithmetal.ru'>sc@workwithmetal.ru</a>"}
                                                image={mail} imageAlt={"Почта"}/>
                            <ListOfContactsItem textHtml={"Москва,</br>проспект Вернадского, 78"}
                                                image={place}
                                                imageAlt={"Место"}/>
                        </ListOfContacts>
                    </div>
                    <div className={headerCss.img}><Image src={painting} alt={"painting"}/></div>
                </div>
            </div>
        </div>
    </header>
}

export default Header;

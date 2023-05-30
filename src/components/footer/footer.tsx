import React from 'react';

import appCss from '../../general_styles/appCss.module.css';
import footerCss from "./footerCss.module.css"

import logo from "../../assets/images/general/logo.png"
import instagram from "../../assets/images/footer/instagram.svg"
import whatsapp from "../../assets/images/footer/whatsapp.svg"
import toTop from "../../assets/images/footer/toTop.svg"

import Link from "next/link"
import Image from "next/image"

type propTypes = {
    handleClickToTop: () => void;
}

const Footer: React.FC<propTypes> = ({handleClickToTop}) => {
    return <footer className={footerCss.footer}>
        <div className={footerCss.footerTop}>
            <div className={appCss.container}>
                <div className={appCss.content}>
                    <div className={footerCss.content}>
                        <div className={footerCss.info}>
                            <div><Link href={"/"}><a>
                                <Image alt={"logo"} src={logo}/>
                            </a></Link></div>
                            <div><a href={"tel:+7 (495) 000-00-00"}><p>+7 (495) 000-00-00</p></a></div>
                            <div><p>sc@workwithmetal.ru</p></div>
                        </div>
                        <div className={footerCss.social}>
                            <a href={""}><Image src={instagram}
                                                                                    alt={"instagram"}/></a>
                            <a href={""}><Image src={whatsapp} alt={"whatsapp"}/></a>
                        </div>
                        <div className={footerCss.linksFirst}>
                            <ul>
                                <li><Link href={"/laser-cutting"}><a><p>Лазерная резка</p></a></Link></li>
                                <li><Link href={"/metal-products"}><a><p>Металлоизделия</p></a></Link></li>
                                <li><Link href={"/powder-painting"}><a><p>Порошковая поскраска</p></a></Link></li>
                                <li><Link href={"/liquid-painting"}><a><p>Жидкая покраска</p></a></Link></li>
                                <li><Link href={"/lighting-supports"}><a><p>Опоры освещения</p></a></Link></li>
                            </ul>
                        </div>
                        <div className={footerCss.linksSecond}>
                            <ul>
                                <li><Link href={"/sand-blasting"}><a><p>Пескоструй</p></a></Link></li>
                                <li><Link href={"/cutting-pipes"}><a><p>Резка труб</p></a></Link></li>
                                <li><Link href={"/contacts"}><a><p>Контакты</p></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={footerCss.footerBottom}>
            <div className={appCss.container}>
                <div className={appCss.content}>
                    <div className={footerCss.content}>
                        <div className={footerCss.toTop} onClick={handleClickToTop}><Image alt={"toTop"}
                                                                                           src={toTop}/></div>
                        <div className={footerCss.privacy}><p>© 2023 Work-with-metal. Все права защищены</p></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;

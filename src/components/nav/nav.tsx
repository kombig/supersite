import React, {RefObject} from 'react';

import appCss from '../../general_styles/appCss.module.css';
import navCss from "./navCss.module.css"

import logo from "../../assets/images/general/logo.png"

import Phone from "../phone/phone";

import Link from "next/link"
import Image from "next/image"

import arrow from "../../assets/images/nav/arrow.svg"

type propTypes = {
    handleClick: () => void,
    refMenuButton: RefObject<HTMLLIElement>,
    refMenu: RefObject<HTMLDivElement>,
    className: string
    handleIsCurrentPage: (path: string) => void
}

const Nav: React.FC<propTypes> = ({handleClick, handleIsCurrentPage, refMenu, refMenuButton, className}) => {
    return <nav className={navCss.nav}>
        <div className={appCss.container + " " + navCss.colorBCG}>
            <div className={appCss.content}>
                <ul className={navCss.col3 + " " + navCss.list + " " + className}>
                    <li className={navCss.logo}>
                        <Link href={"/"}>
                            <a><Image alt={"logo"} src={logo}/></a>
                        </Link>
                    </li>
                    <div ref={refMenu} className={navCss.wrapperMenu}>
                        <div className={navCss.menu}>
                            <li>
                                <ul>
                                    <li>
                                        <Link href={"/metal-products"}>
                                            <a onClick={() => handleIsCurrentPage("/metal-products")}>
                                                <p>Металлоизделия</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/laser-cutting"}>
                                            <a onClick={() => handleIsCurrentPage("/laser-cutting")}><p>Лазерная
                                                резка</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/lighting-supports"}>
                                            <a onClick={() => handleIsCurrentPage("/lighting-supports")}><p>Опоры
                                                освещения</p>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <p>Металлопродукция</p>
                                    <Image src={arrow} alt={"arrow"}/>
                                </div>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <Link href={"/powder-painting"}>
                                            <a onClick={() => handleIsCurrentPage("/powder-painting")}><p>Порошковая
                                                покраска</p></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/liquid-painting"}>
                                            <a onClick={() => handleIsCurrentPage("/liquid-painting")}><p>Жидкая
                                                покраска</p></a>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <p>Покраска</p>
                                    <Image src={arrow} alt={"arrow"}/>
                                </div>
                            </li>
                            <li>
                                <Link href={"/sand-blasting"}>
                                    <a onClick={() => handleIsCurrentPage("/sand-blasting")}><p>Пескоструй</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/cutting-pipes"}>
                                    <a onClick={() => handleIsCurrentPage("/cutting-pipes")}><p>Резка труб</p></a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contacts"}>
                                    <a onClick={() => handleIsCurrentPage("/contacts")}><p>Контакты</p></a>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <li className={navCss.phoneWrapper}>
                        <Phone anotherClassName={navCss.phone} phoneNumber={"+7 (495) 000-00-00"}/>
                    </li>
                    <li className={navCss.burgMenu} onClick={handleClick} ref={refMenuButton}>
                        <div className={navCss.cross}/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Nav;

import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionFirstCss from "./section-firstCss.module.css"

import sandblasting from "../../../../../assets/images/sand-blasting/sectionFirst/1.jpg"

import Image from "next/image"

const sectionFirst = () => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionFirstCss.content}>
                    <div className={sectionFirstCss.text}>
                        <h1 className={sectionFirstCss.titleSandBlasting}>Пескоструйная обработка</h1>
                        <p className={sectionFirstCss.descriptionSandBlasting}>Одним из ключевых процессов в
                            металлообработке является очистка материала пескоструем.
                            Этот процесс позволяет решить следующие задачи:
                        </p>
                        <ul className={sectionFirstCss.listOfSandBlasting}>
                            <li><p>Удалить с поверхности металлических деталей отслоившуюся окалину и следы
                                коррозии;</p></li>
                            <li><p>Дополнительно очистить поверхность металлических заготовок от различного типа
                                декоративного
                                покрытия, грязи и налета;</p>
                            </li>
                            <li><p>Устранить жировые пленки с поверхности деталей перед проведением технических
                                операций;</p>
                            </li>
                            <li><p>Произвести окончательную обработку детали перед порошковой покраской.</p></li>
                        </ul>
                    </div>
                    <div className={sectionFirstCss.img}><Image src={sandblasting} alt={"sandblasting"}/></div>
                </div>
            </div>
        </div>
    </section>
}

export default sectionFirst;

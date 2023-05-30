import React, {RefObject} from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import sectionSecondCss from "./section-secondCss.module.css";

import poster from "../../../../../assets/images/cutting-pipes/sectionSecond/poster.png"
import Image from "next/image";
import pillar from "../../../../../assets/images/cutting-pipes/sectionSecond/pillar.png";
import pillar90 from "../../../../../assets/images/cutting-pipes/sectionSecond/pillar90.png";

type propTypes = {
    videoRef: RefObject<HTMLVideoElement>;
    is1280: boolean;
}

const SectionSecond: React.FC<propTypes> = ({videoRef, is1280}) => {
    return <section>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={sectionSecondCss.content}>
                    <div className={sectionSecondCss.info}>
                        <h2 className={sectionSecondCss.titleLight}>Опоры освещения</h2>
                        <h3 className={sectionSecondCss.titleMortgagesLight}>Изготовление закладных под опоры
                            освещения</h3>
                        <ul>
                            <li>
                                <p>
                                    Закладные детали фундамента используются для установки на них фланцевых опор для
                                    освещения автомобильных дорог, парков, скверов, придомовых территорий, спортивных
                                    комплексов, территорий перед торгово-развлекательными центрами. Кроме того, на
                                    закладные детали устанавливают молниеотводы и мачты освещения.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Закладная деталь фундамента позволяет легко демонтировать фланцевую опору освещения,
                                    молниеотвод или мачту для последующей замены или ремонта, без повреждения
                                    конструкции.
                                </p>
                            </li>
                            <li>
                                <p>
                                    В зависимости от типа воспринимаемой нагрузки закладные для опор освещения могут
                                    быть изготовлены с квадратными фланцами с 4-мя отверстиями (тип К) или с круглыми
                                    фланцами с количеством отверстий более 4-х (тип Д). Фундаменты опор освещения имеют
                                    сквозное окно для подвода кабеля и заведения его в тело опоры. Наличие
                                    дополнительных отверстий или их отсутствие необходимо оговаривать отдельно при
                                    заказе.
                                </p>
                            </li>
                        </ul>
                    </div>
                    {is1280 ? <div className={sectionSecondCss.sizeImg}>
                        <Image src={pillar} alt={"pillar"}/>
                    </div> : <div className={sectionSecondCss.sizeImg}>
                        <Image src={pillar90} alt={"pillar90"}/>
                    </div>}
                    <div className={sectionSecondCss.video}>
                        <video ref={videoRef} controls={true} playsInline={true} poster={poster.src} loop={true}
                               autoPlay={true} muted={true}>
                            <source
                                src={"/videos/1.mp4"}
                                type={'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}/>
                            <source src="/videos/1.webm"
                                    type={'video/webm; codecs="vp8, vorbis"'}/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSecond;

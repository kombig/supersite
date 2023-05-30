import Link from "next/link";

import sectionFirstCss from "./sectionFirst.module.css";

const SectionFirst = () => {
    return <div className={sectionFirstCss.sec}>
        <div className={sectionFirstCss.container}>
            <div className={sectionFirstCss.content}>
                <div className={sectionFirstCss.innerContent}>
                    <div className={sectionFirstCss.errorTextDig}>404</div>
                    <div className={sectionFirstCss.errorText}>Упс, что-то пошло не так... (((</div>
                    <Link href={"/"}>
                        <a>
                            <div className={sectionFirstCss.buttonWrapper}>
                                <div>на главную</div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default SectionFirst;

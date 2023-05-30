import React from 'react';
import phoneCss from "./phoneCss.module.css";

type propTypes = {
    phoneNumber: string,
    anotherClassName?: string
}

const Phone: React.FC<propTypes> = ({phoneNumber, anotherClassName}) => {
    const classNames = [anotherClassName, phoneCss.phone]

    return <a className={classNames.join(" ")} href={`tel:${phoneNumber}`}><p>{phoneNumber}</p></a>
}

export default Phone;

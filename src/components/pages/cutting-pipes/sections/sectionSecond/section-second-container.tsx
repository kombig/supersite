import React, {useEffect, useRef} from 'react';

import SectionSecond from './section-second';
import {useMediaQuery} from "react-responsive";

const SectionSecondContainer = () => {
    const video = useRef<HTMLVideoElement>(null);

    const is1280 = useMediaQuery({query: `(min-width: 1280px)`});

    useEffect(() => {
        video.current!.volume = 0;
    }, []);

    return <SectionSecond videoRef={video} is1280={is1280}/>
}

export default SectionSecondContainer;

import Custom404 from "./404";
import {useEffect, useState} from "react";

const Custom404Container = () => {
    const [height, setHeight] = useState({height: "0px"})

    const handleResize = () => {
        setHeight({height: `${window.innerHeight}px`});
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return <Custom404 style={height}/>
}

export default Custom404Container;

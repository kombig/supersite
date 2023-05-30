import React, {RefObject, useEffect, useRef, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useRouter} from "next/router";

import navCss from "./navCss.module.css";

import Nav from "./nav";

const NavContainer = () => {
    const [open, setOpen] = useState(false)
    const [classNames, setClassNames] = useState({classNames: ""})
    const isPc = useMediaQuery({query: `(min-width: 1280px)`});

    const refMenu: RefObject<HTMLDivElement> = useRef(null);
    const refMenuButton: RefObject<HTMLLIElement> = useRef(null);

    const pathName = useRouter().pathname;

    const resetClassNames = () => {
        setClassNames({classNames: ""});
    }

    const handleOutSideClick = (event: any) => {
        if (!isPc) {
            if (refMenu.current && refMenuButton.current) {
                if (!refMenu.current!.contains(event.target) && !refMenuButton.current!.contains(event.target)) {
                    closeMenu();
                }
            }
        }
    }

    useEffect(() => {
        if (isPc) {
            setOpen(false)
            resetClassNames();
        } else {
            closeMenu()
            resetClassNames();
        }
        window.addEventListener("click", handleOutSideClick)
        return () => {
            window.removeEventListener("click", handleOutSideClick)
        }
        // eslint-disable-next-line
    }, [isPc]);

    useEffect(() => {
        if (!isPc) {
            closeMenu();
        }
        // eslint-disable-next-line
    }, [pathName]);

    const openMenu = () => {
        setClassNames({classNames: navCss.active})
        setOpen(true);
    }

    const closeMenu = () => {
        resetClassNames();
        setOpen(false);
    }

    const handleClick = () => {
        !open ? openMenu() : closeMenu();
    }

    const handleIsCurrentPage = (path: string) => {
        if (path === pathName && !isPc) closeMenu();
    }

    return <Nav refMenuButton={refMenuButton} refMenu={refMenu} handleClick={handleClick}
                className={classNames.classNames} handleIsCurrentPage={handleIsCurrentPage}/>
}

export default NavContainer;

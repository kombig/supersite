import React, {ReactNode} from 'react';

import Nav from "../nav/nav-container";
import Footer from "../footer/footer-container";

type propTypes = {
    children: Array<ReactNode> | ReactNode
}

const NavContentFooterLayout: React.FC<propTypes> = ({children}) => {
    return <>
        <Nav/>
        {children}
        <Footer/>
    </>
}

export default NavContentFooterLayout;

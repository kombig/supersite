import React from 'react';

import WithScrollToTop from "../../hoc/scroll-to-top/scroll-to-top";
import Footer from './footer';

type propTypes = {
    handleClickToTop: () => void;
}

const FooterContainer: React.FC<propTypes> = ({handleClickToTop}) => {
    return <Footer handleClickToTop={handleClickToTop}/>
}

export default WithScrollToTop(500)(FooterContainer);
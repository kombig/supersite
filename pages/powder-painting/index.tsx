import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import PowderPainting from "../../src/components/pages/powder-painting/powder-painting";

const PowderPaintingPage: NextPage = () => {
    return <>
        <Head>
            <title>Порошковая покраска изделий из металла в Москве | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Услуги порошковой покраски крупногабаритных металлических изделий."}/>
        </Head>
        <NavContentFooterLayout>
            <PowderPainting/>
        </NavContentFooterLayout>
    </>
}

export default PowderPaintingPage

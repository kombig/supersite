import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import LiguidPainting from "../../src/components/pages/liquid-painting/liquid-painting";

const LiguidPaintingPage: NextPage = () => {
    return <>
        <Head>
            <title>Услуги по жидкой покраске металла, пластика и дерева в Москвке и МО. | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Профессиональная жидкая покраска металла, пластика и дерева."}/>
        </Head>
        <NavContentFooterLayout>
            <LiguidPainting/>
        </NavContentFooterLayout>
    </>
}

export default LiguidPaintingPage

import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import SandBlasting from "../../src/components/pages/sand-blasting/sand-blasting";

const SandBlastingPage: NextPage = () => {
    return <>
        <Head>
            <title>Пескоструйная обработка металлических изделий | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Услуги пескоструйной обработки в Москве и Москвоской области - очистка и покраска."}/>
        </Head>
        <NavContentFooterLayout>
            <SandBlasting/>
        </NavContentFooterLayout>
    </>
}

export default SandBlastingPage

import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import CuttingPipes from "../../src/components/pages/cutting-pipes/cutting-pipes";

const CuttingPipesPage: NextPage = () => {
    return <>
        <Head>
            <title>Резка труб в Москве. Длина до 12 метров | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Режем металлические трубы в нужный размер или необходимый для транспортировки."}/>
        </Head>
        <NavContentFooterLayout>
            <CuttingPipes/>
        </NavContentFooterLayout>
    </>
}

export default CuttingPipesPage

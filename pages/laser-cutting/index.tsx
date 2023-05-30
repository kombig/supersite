import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import LaserCutting from "../../src/components/pages/laser-cutting/laser-cutting";

const LaserCuttingPage: NextPage = () => {
    return <>
        <Head>
            <title>Лазерная резка листового металла на заказ | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Услуга лазерной резки различных материалов с высокой точностью."}/>
        </Head>
        <NavContentFooterLayout>
            <LaserCutting/>
        </NavContentFooterLayout>
    </>
}

export default LaserCuttingPage

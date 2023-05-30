import type {NextPage} from 'next'
import Head from "next/head"

import Main from "../src/components/pages/main/main";
import NavContentFooterLayout from "../src/components/layouts/nav-content-footer-layout";

const HomePage: NextPage = () => {
    return <>
        <Head>
            <title>Услуги металлоизделий и Порошковой Покраски в Москве и Московской области | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Занимаемся производством металлоизделий на заказ, осуществляем порошковую покраску габаритных изделий, пескоструйную обработку, резку труб, ковку металла и лазерную резку."}/>
        </Head>
        <NavContentFooterLayout>
            <Main/>
        </NavContentFooterLayout>
    </>
}

export default HomePage

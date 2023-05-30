import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import MetalProducts from "../../src/components/pages/metal-products/metal-products";

const SandBlastingPage: NextPage = () => {
    return <>
        <Head>
            <title>Изготовление металлических изделий на заказ | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Производство изделий из металла любой сложности в заданный срок в Москве."}/>
        </Head>
        <NavContentFooterLayout>
            <MetalProducts/>
        </NavContentFooterLayout>
    </>
}

export default SandBlastingPage

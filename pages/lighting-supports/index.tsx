import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import LightingSupports from "../../src/components/pages/lighting-supports/lighting-supports";

const MetalForgingPage: NextPage = () => {
    return <>
        <Head>
            <title>Производство высококачественных опор освещения и закладных для гражданского и промышленного
                строительства | WorkWithMetal</title>
            <meta name={"description"}
                  content={"Опоры освещения и закладные детали - производство в Москве и МО."}/>
        </Head>
        <NavContentFooterLayout>
            <LightingSupports/>
        </NavContentFooterLayout>
    </>
}

export default MetalForgingPage

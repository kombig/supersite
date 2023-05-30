import type {AppProps} from 'next/app'
import Head from "next/head"

import 'antd/lib/tabs/style/index.css'
import "../src/general_styles/appCss.css"

function MyApp({Component, pageProps}: AppProps) {

    return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="apple-mobile-web-app-title" content="Spec-Metal"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name={"yandex-verification"} content={"dbf4b51cd9ab8997"}/>
            <meta name={"robots"} content={"index, follow"}/>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp

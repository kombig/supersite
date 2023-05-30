import type {NextPage} from 'next'
import Head from "next/head";

import NavContentFooterLayout from "../../src/components/layouts/nav-content-footer-layout";
import Contacts from "../../src/components/pages/contacts/contacts";

const ContactsPage: NextPage = () => {
    return <>
        <Head>
            <title>Контакты - WorkWithMetal, Проиводство металлоизделий</title>
            <meta name={"description"}
                  content={"Контакты компании спецколор. Услуги по металлообработки и порошковой покраски. Москва, проспект Вернадского, 78."}/>
        </Head>
        <NavContentFooterLayout>
            <Contacts/>
        </NavContentFooterLayout>
    </>
}

export default ContactsPage

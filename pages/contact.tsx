import { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ContactForm from "../components/contact/contact_form";
import ContactDiscuss from "../components/contact/contact_discuss";
import ContactSiny from "../components/contact/contact_siny";

const Agency: NextPage = () => {
    return (
        <div id="agency">
            <Head>
                <title>Siny Agency - Agency</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box position="fixed" h="100vh" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" mx="5em" my="2em">
                <ContactSiny />
                <Box h="75%" display="flex" flexDirection="column" justifyContent="center" alignItems="start" bg="#D8EEFE" borderRadius="22px" p="2em">
                    <ContactDiscuss />
                    <ContactForm />
                </Box>
            </Box>
        </div>
    )
}

export default Agency
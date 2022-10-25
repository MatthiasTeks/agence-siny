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
            <Box position="fixed" w="100vw" h="100vh" display="flex" flexDirection={{ sm: "column", lg: "row"}} justifyContent="center" alignItems="center" mx="10vw" my="5vh">
                <ContactSiny />
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <ContactDiscuss />
                    <ContactForm />
                </Box>
            </Box>
        </div>
    )
}

export default Agency
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
            <Box position={{sm: "initial", lg: "fixed"}} h={{sm: "inherit", lg: "100vh"}} display="flex" flexDirection={{sm: "column", lg: "row"}} justifyContent="space-evenly" alignItems="center" mx={{sm: "2em" , lg: "5em"}} my="2em">
                <Box display={{sm: "block", lg: "none"}} w={{sm: "30vw", lg: "10vw"}} cursor="pointer">
                    <Link href="/">
                        <Image
                            src="/images/logo.webp"
                            layout="responsive"
                            height={56}
                            width={175}
                            sizes=" (min-width: 60em) 24vw,
                                (min-width: 28em) 45vw,
                                100vw"
                            alt="Siny Agency Logo"
                        />
                    </Link>
                </Box>
                <ContactSiny idDevice="desktop" />
                <Box h="75%" display="flex" flexDirection="column" justifyContent="center" alignItems="start" bg="#D8EEFE" borderRadius="22px" p="2em" mt={{sm: "1em" , lg: "0"}}>
                    <ContactDiscuss />
                    <ContactForm />
                </Box>
                <ContactSiny idDevice="mobile" />
            </Box>
        </div>
    )
}   

export default Agency
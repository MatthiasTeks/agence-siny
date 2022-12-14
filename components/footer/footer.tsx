import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box id="siny-pilotage" display="flex" flexDirection={{ sm: "column", xl: "row" }} justifyContent={{sm: "center", xl: "start"}}  alignItems={{sm: "center", xl: "start"}} mx="10vw" mt="1em" py="2em">
            <Box display="flex" flexDirection={{ sm: "column" }} justifyContent="start" alignItems="start" flexGrow={1}>
                <Heading color="blue.700" textAlign={{sm: "center", xl: "start" }} as="h4" size={{sm: "xl", lg: "lg", '2xl': "xl"}} letterSpacing="-1px" width={{sm: "100%", xl: "60%", '2xl': "30%"}}>
                    Votre agence pour une digitalisation réussie.
                </Heading>
                <Box id="siny-icons" display={{sm: "none", xl: "flex"}} flexDirection={{ sm: "row" }} justifyContent={{sm: "center", xl: "start"}}  alignItems={{sm: "center", xl: "start"}}  pt="2em" width="100%">
                    <a href="https://www.linkedin.com/in/matthias-vimbert/" target="_blank" rel="noreferrer">
                        <Image
                            src="/images/linkedin.webp"
                            layout="fixed"
                            height={35}
                            width={35}
                            alt={`image representing logo of Linkedin`}
                        />
                    </a>
                    <a href="https://goo.gl/maps/ynFVhNmEWgvidRZc8" target="_blank" rel="noreferrer">
                        <Image
                            src="/images/google.webp"
                            layout="fixed"
                            height={35}
                            width={35}
                            alt={`image representing logo of Google`}
                        />
                    </a>
                </Box>
                <Text color="blue.700" display={{sm: "none", xl: "block"}} fontSize="sm" textAlign="start" letterSpacing="-1px" pt="2em">
                    @ 2022 Siny. Tout droit reservé.
                </Text>
            </Box>
            {/* LEGALS */}
            <Box display="flex" flexDirection={{ sm: "column" }} justifyContent={{sm: "center", xl: "start"}}  alignItems={{sm: "center", xl: "start"}}  mr={{sm: "0px", xl: "5em"}} mt={{sm: "2em", xl: "0"}}>
                <Heading color="blue.700" textAlign={{sm: "center" , lg: "start" }} as="h4" size={{sm: "sm", lg: "md", '2xl': "lg"}}  letterSpacing="-1px">
                    Legals
                </Heading>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    Cookies
                </Text>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    Utilisation de vos données
                </Text>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    Droit de retractation
                </Text>
            </Box>
            {/* A PROPOS */}
            <Box display="flex" flexDirection={{ sm: "column" }} justifyContent={{sm: "center", xl: "start"}}  alignItems={{sm: "center", xl: "start"}}  mr={{sm: "0px", xl: "5em"}} mt={{sm: "2em", xl: "0"}}>
                <Heading color="blue.700" textAlign={{sm: "center" , lg: "start" }} as="h4" size={{sm: "sm", lg: "md", '2xl': "lg"}}  letterSpacing="-1px">
                    A propos
                </Heading>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    A notre sujet
                </Text>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    Contact
                </Text>
            </Box>
            {/* SINY AGENCY */}
            <Box display="flex" flexDirection={{ sm: "column" }} justifyContent={{sm: "center", xl: "start"}}  alignItems={{sm: "center", xl: "start"}} mt={{sm: "2em", xl: "0"}}>
                <Heading color="blue.700" textAlign={{sm: "center" , lg: "start" }} as="h4" size={{sm: "sm", lg: "md", '2xl': "lg"}}  letterSpacing="-1px">
                    Siny Agency
                </Heading>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    Agence à Cenon
                </Text>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    50 Avenue Jean Jaurès
                </Text>
                <Text color="blue.700" fontSize={{sm: "sm", lg: "sm", '2xl': "md"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="1em">
                    Sur rendez-vous
                </Text>
            </Box>
            <Box id="siny-icons" display={{sm: "flex", xl: "none"}} flexDirection={{ sm: "row" }} justifyContent={{sm: "center", xl: "start"}}  alignItems={{sm: "center", xl: "start"}}  pt="2em" width="100%">
                <a href="https://www.linkedin.com/in/matthias-vimbert/" target="_blank" rel="noreferrer">
                    <Image
                        src="/images/linkedin.webp"
                        layout="fixed"
                        height={35}
                        width={35}
                        alt={`image representing logo of Linkedin`}
                    />
                </a>
                <a href="https://goo.gl/maps/ynFVhNmEWgvidRZc8" target="_blank" rel="noreferrer">
                    <Image
                        src="/images/google.webp"
                        layout="fixed"
                        height={35}
                        width={35}
                        alt={`image representing logo of Google`}
                    />
                </a>
            </Box>
            <Text color="blue.700" display={{sm: "block", xl: "none"}} fontSize="sm" textAlign="center" letterSpacing="-1px" pt="2em" width="100%">
                @ 2022 Siny. Tout droit reservé.
            </Text>
        </Box>
    )
}

export default Footer
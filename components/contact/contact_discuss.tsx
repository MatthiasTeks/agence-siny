import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

const ContactDiscuss = () => {
    return (
        <Box display="flex" flexDirection={{sm: "column", xl: "row"}} justifyContent="center" alignItems="center">
            <Box id="siny-developper" display={{sm: "flex", lg: "none"}} flexDirection="row" justifyContent="center" alignItems="center" alignSelf={{sm: "center" , lg: "start"}}>
                <Image
                    src={"/images/matthias.png"}
                    layout="fixed"
                    height={60}
                    width={60}
                    alt="team member"
                />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems={{sm: "center" , lg: "start"}}>
                <Heading color="blue.700" textAlign={{sm: "center" , lg: "left"}} as="h1" size={{sm: "md", xl: "lg", '2xl': "xl"}}  letterSpacing="-1px" w={{sm: "100%" , lg: "60%"}} pt={{sm: "1em", lg: "0"}}>
                    Discutons de votre projet avec notre équipe technique.
                </Heading>
                <Text fontSize={{sm: "sm", xl: "lg", '2xl': "xl"}} textAlign={{sm: "center" , lg: "left"}} fontWeight="lighter" pt="0.5em">
                    Posez des questions, apprenez-en davantage sur notre solution et lancer votre projet digital.
                </Text>
            </Box>
            <Box id="siny-developper" display={{sm: "none", lg: "block"}} flexDirection="row" justifyContent="center" alignItems="center" alignSelf="start">
                <Image
                    src={"/images/matthias.png"}
                    layout="fixed"
                    height={60}
                    width={60}
                    alt="team member"
                />
            </Box>
        </Box>
    )
}

export default ContactDiscuss
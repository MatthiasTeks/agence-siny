import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

const ContactDiscuss = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start">
                <Heading color="blue.700" textAlign="left" as="h1" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px" w="60%">
                    Discutons de votre projet avec notre équipe technique.
                </Heading>
                <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter" pt="0.5em">
                    Posez des questions, apprenez-en davantage sur notre solution et lancez votre projet digital.
                </Text>
            </Box>
        <Box id="siny-developper" display="flex" flexDirection="row" justifyContent="center" alignItems="center" alignSelf="start">
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
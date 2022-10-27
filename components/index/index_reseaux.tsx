import { Box, Heading, Text } from "@chakra-ui/react";
import Reseaux from "./utils/reseaux";

const IndexReseaux = () => {
    return (
        <Box id="siny-reseaux" display="flex" flexDirection={{ sm: "column", xl: "row" }} justifyContent="center" alignItems="center" mx="10vw" px="10vw" bg="#90b4ce25" borderRadius="32px" mt="1em" py="5em">
            <Box display="flex" flexDirection="column" justifyContent={{sm: "center", xl: "start"}} alignItems={{sm: "center", xl: "start"}}>
                <Heading color="blue.700" textAlign={{sm: "center", lg: "left"}} as="h2" size={{sm: "xl", xl: "xl", '2xl': "2xl"}}  letterSpacing="-1px" width={{sm: "100%", xl: "90%", '2xl': "60%"}}>
                    Nous vous accompagnons sur les réseaux sociaux.
                </Heading>
                <Text color="blue.700" fontSize={{sm: "lg", xl: "xl", '2xl': "2xl"}} textAlign={{sm: "center", xl: "left"}} letterSpacing="-1px" pt="1em" width={{xl: "90%", '2xl': "60%"}}>
                    De puissants outils pour développer et fidéliser votre clientèle.
                </Text>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center">
                <Reseaux image="/images/instagram.png" title="Instagram" delay={0.25} />
                <Reseaux image="/images/facebook.png" title="Facebook" delay={0.50} />
                <Reseaux image="/images/linkedin.png" title="Linkedin" delay={0.75} />
                <Reseaux image="/images/twitter.png" title="Twitter" delay={1} />
                <Reseaux image="/images/discord.png" title="Discord" delay={1.25} />
            </Box>
        </Box>
    )
}

export default IndexReseaux
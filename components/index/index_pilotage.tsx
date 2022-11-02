import { Box, Heading, Text } from "@chakra-ui/react";
import Pilotage from "./utils/pilotage";

const IndexPilotage = () => {
    return (
        <Box id="siny-pilotage" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="red.500" borderRadius="32px" mt="1em" py="5em">
            <Heading color="white.500" textAlign="center" as="h2" size={{sm: "lg", xl: "xl", '2xl': "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Pilotage de votre image de marque.
            </Heading>
            <Text color="white.500" fontSize={{sm: "md", xl: "xl", '2xl': "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny s’engage à piloter votre projet en participant à la réalisation d’une image de marque moderne et efficace en cohérence avec votre stratégie marketing.           
            </Text>
            <Box display="flex" flexDirection={{sm: "column", xl: "row"}} justifyContent="center" alignItems={{sm: "center", xl: "end"}} width="100%" height="100%" pt="2em">
                <Pilotage image="/images/logo.webp" title="Logo" resume="Accompagnement dans la réalisation de votre logo avec nos graphistes partenaires" delay={0.25} />
                <Pilotage image="/images/font.webp" title="Police" resume="Sélection stratégique des polices d’écriture de votre image de marque libres de droits." delay={0.5}/>
                <Pilotage image="/images/crayons.webp" title="Palette de couleur" resume="Création de votre palette de couleurs en adéquation avec votre stratégie marketing" delay={0.75}/>
            </Box>
        </Box>
    )
}

export default IndexPilotage
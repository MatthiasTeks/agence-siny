import {Box, Heading, Text} from "@chakra-ui/react";
import Pilotage from "./utils/pilotage";

const IndexPilotage = () => {
    return (
        <Box id="siny-pilotage" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="red.500" borderRadius="32px" mt="1em" py="5em">
            <Heading color="white.500" textAlign="center" as="h2" size={{sm: "xl", xl: "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Pilotage de votre image de marque.
            </Heading>
            <Text color="white.500" fontSize={{sm: "md", xl: "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny s’engage à piloter votre projet en participant à la réalisation d’une image de marque moderne et efficace, répondant à vos demandes.            </Text>
            <Box display="flex" flexDirection={{sm: "column", xl: "row"}} justifyContent="center" alignItems={{sm: "center", xl: "end"}} width="100%" height="100%" pt="2em">
                <Pilotage image="/images/flaticons/logo.png" title="Logo" resume="Accompagnement dans la réalisation de votre logo avec nos graphistes partenaires" delay={0.25} />
                <Pilotage image="/images/flaticons/font.png" title="Police" resume="Séléction stratégique des polices d’écritures de votre image de marque" delay={0.5}/>
                <Pilotage image="/images/flaticons/crayons.png" title="Palette de couleur" resume="Création de votre palette de couleur en adéquation avec votre stratégie marketing" delay={0.75}/>
            </Box>
        </Box>
    )
}

export default IndexPilotage
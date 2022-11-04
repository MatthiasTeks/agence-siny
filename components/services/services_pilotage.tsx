import { Box, Heading, Text } from "@chakra-ui/react";
import ServicesCard from "./utils/services_card";

const ServicesPilotage = () => {
    return (
        <Box id="services-cards" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="blue.700" borderRadius="32px" mt="1em" py="3em">
            <Heading color="white.500" textAlign="center" as="h2" size={{sm: "lg", xl: "xl", '2xl': "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                La vie de votre entreprise
            </Heading>
            <Text color="white.500" fontSize={{sm: "md", xl: "xl", '2xl': "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny analyse votre audience pour vous proposer une stratégie digitale adaptée à votre cible.
            </Text>
            <Box display="flex" flexDirection={{sm : "column", lg: "row"}} justifyContent="center" alignItems="center">
                <ServicesCard title="IMAGE" name="Création d'une charte graphique" price="500€" isMonth={false} resume="Pilotage de la réalisation de votre image de marque avec nos graphistes partenaires."/>
                <ServicesCard title="RESEAUX" name="Créer une communauté" isMonth={true} price="250€" resume="Management de vos réseaux sociaux en cohérence avec votre stratégie marketing."/>
                <ServicesCard title="AUDIT" name="Analyser vos performances web" price="250€" isMonth={false} resume="Audit de l'implantation digitale de votre entreprise, identification des axes d'améliorations."/>
            </Box>
        </Box>
    )
}

export default ServicesPilotage
import { Box, Heading, Text } from "@chakra-ui/react";
import ServicesCard from "./utils/services_card";

const ServicesPilotage = () => {
    return (
        <Box id="services-cards" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="blue.700" borderRadius="32px" mt="1em" py="3em">
            <Heading color="white.500" textAlign="center" as="h2" size={{sm: "lg", xl: "xl", '2xl': "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                La vie de votre entreprise
            </Heading>
            <Text color="white.500" fontSize={{sm: "md", xl: "xl", '2xl': "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny met un point d’honneur à faire preuve de transparence et à travailler de pair avec vous pour vous guider au mieux vers la réalisation d’un site internet moderne répondant à vos demandes.
            </Text>
            <Box display="flex" flexDirection={{sm : "column", lg: "row"}} justifyContent="center" alignItems="center">
                <ServicesCard title="IMAGE" name="Une image qui vous represente" price="500€" resume="Pilotage de la réalisation de votre image de marque avec notre partenaire graphiste."/>
                <ServicesCard title="RESEAUX" name="Proposer vos services et tarifs" price="250€" resume="Management de vos réseaux sociaux en cohérence avec votre stratégie marketing."/>
                <ServicesCard title="AUDIT" name="Développer votre business" price="250€" resume="Audit de l'implantation digitale de votre entreprise, ciblage des axes d'améliorations."/>
            </Box>
        </Box>
    )
}

export default ServicesPilotage
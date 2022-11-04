import { Box, Heading, Text } from "@chakra-ui/react";
import ServicesCard from "./utils/services_card";

const ServicesConception = () => {
    return (
        <Box id="services-cards" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="#90b4ce25" borderRadius="32px" mt="1em" py="3em">
            <Heading color="blue.700" textAlign="center" as="h2" size={{sm: "lg", xl: "xl", '2xl': "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Conception de site internet
            </Heading>
            <Text color="gray.500" fontSize={{sm: "md", xl: "xl", '2xl': "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny met un point d’honneur à faire preuve de transparence et à travailler de pair avec vous pour vous guider au mieux.
            </Text>
            <Box display="flex" flexDirection={{sm : "column", lg: "row"}} justifyContent="center" alignItems="center">
                <ServicesCard title="START" name="Soyez présent sur internet" price="500€" resume="Création d'un site internet sur une page unique afin de rendre votre entreprise présente en ligne."/>
                <ServicesCard title="VITRINE" name="Proposer vos services et tarifs" price="2000€" resume="Création d'un site internet unique mettant en avant votre entreprise, ses produits, services, son histoire."/>
                <ServicesCard title="PREMIUM" name="Développer votre business" price="3000€" resume="Création d'un site internet entièrement sur mesure pour propulser votre business sur internet."    />
            </Box>
        </Box>
    )
}

export default ServicesConception
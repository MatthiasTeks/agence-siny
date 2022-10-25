import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Accordion from "./utils/accordion";

const AgencyProcess = () => {

    const [accordion, setAccordion] = useState(0);

    return (
        <Box id="siny-concevoir" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="#90b4ce25" borderRadius="32px" mt="1em" pt="5em">
            <Heading color="blue.700" textAlign="center" as="h2" size={{sm: "xl", xl: "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Des processus simples et efficaces pour la conception web.
            </Heading>
            <Text color="gray.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny met un point d’honneur à respecter ces processus qui permettent selon nous de délivrer des produits respectant parfaitement les exigences de nos clients en etablissant une relation client saine et agreable.
            </Text>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" pt="1em">
                <Text color="gray.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign="center" letterSpacing="-1px" >
                    Nous contacter
                </Text>
                <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="red.500"/>
            </Box>
            <Box display="flex" flexDirection={{sm: "column", xl: "row"}} justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Accordion title="Premier Contact" accordion={accordion} setAccordion={setAccordion} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo sollicitudin, tempus purus eget. Fusce id justo sollicitudin, tempus purus eget." index={1} />
                    <Accordion title="Maquettage" accordion={accordion} setAccordion={setAccordion} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo sollicitudin, tempus purus eget. Fusce id justo sollicitudin, tempus purus eget." index={2} />
                    <Accordion title="Développement" accordion={accordion} setAccordion={setAccordion} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo sollicitudin, tempus purus eget. Fusce id justo sollicitudin, tempus purus eget." index={3} />
                    <Accordion title="Test" accordion={accordion} setAccordion={setAccordion} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo sollicitudin, tempus purus eget. Fusce id justo sollicitudin, tempus purus eget." index={4} />
                    <Accordion title="Deploiement" accordion={accordion} setAccordion={setAccordion} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo sollicitudin, tempus purus eget. Fusce id justo sollicitudin, tempus purus eget." index={5} />

                </Box>
            </Box>
        </Box>
    )
}

export default AgencyProcess
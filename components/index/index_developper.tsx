import {Box, Heading, Icon, Text} from "@chakra-ui/react";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import Developper from "./utils/developper";

const IndexDevelopper = () => {
    return (
        <Box id="siny-developper" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="blue.700" borderRadius="32px" mt="1em" py="5em">
            <Heading color="white.500" textAlign="center" as="h2" size={{sm: "xl", xl: "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Développer votre audience sur internet.
            </Heading>
            <Text color="white.500" fontSize={{sm: "md", xl: "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny vous apporte toute les clés pour développer votre audience sur internet, d’une optimisation du référence sur votre site web jusqu’à l’établissement d’une stratégie digitale, vous mettrez toute les chances de votre côté.
            </Text>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" pt="1em">
                <Text color="white.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign={{ sm: "center", lg: "center" }} letterSpacing="-1px" >
                    Nous contacter
                </Text>
                <Icon id="siny-developper-icon" as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="red.500"/>
            </Box>
            <Box display="flex" flexDirection={{sm: "column", xl: "row"}} justifyContent="center" alignItems={{sm: "center", xl: "end"}} width="100%" height="100%" pt="2em">
                <Developper image="/images/index_users/orane.jpg" name="Orane Guichard" title="Conception site web" resume="“ Rapide, efficace, arrangeant ”" delay={0.25} />
                <Developper image="/images/index_users/tom.png" name="Tom Harris" title="Conception site web" resume="“ Rapide, efficace, arrangeant ”" delay={0.5}/>
                <Developper image="/images/index_users/sunly.png" name="Sunly Hor" title="Conception site web" resume="“ Rapide, efficace, arrangeant ”" delay={0.75} />
            </Box>
        </Box>
    )
}

export default IndexDevelopper
import Link from "next/link";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Developper from "./utils/developper";

const IndexDevelopper = () => {
    return (
        <Box id="siny-developper" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="blue.700" borderRadius="32px" mt="1em" py="5em">
            <Heading color="white.500" textAlign="center" as="h2" size={{sm: "lg", xl: "xl", '2xl': "2xl"}} letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Développer votre audience sur internet.
            </Heading>
            <Text color="white.500" fontSize={{sm: "md", xl: "xl", '2xl': "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny vous apporte toutes les clés pour développer votre audience sur internet. Optimisation du référencement site internet, création stratégie digitale, mettez toutes les chances de votre côté.
            </Text>
            <Link href="/contact">
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" pt="1em">
                    <Text color="white.500" fontSize={{sm: "lg", xl: "xl", '2xl': "2xl"}} textAlign={{ sm: "center", lg: "center" }} letterSpacing="-1px" cursor="pointer">
                        Nous contacter
                    </Text>
                    <Icon id="siny-developper-icon" as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="red.500"/>
                </Box>
            </Link>
            <Box display="flex" flexDirection={{sm: "column", xl: "row"}} justifyContent="center" alignItems={{sm: "center", xl: "end"}} width="100%" height="100%" pt="2em">
                <Developper image="/images/orane.webp" name="Orane Guichard" title="Conception site web" resume="“ Rapide, efficace, arrangeant ”" delay={0.25} />
                <Developper image="/images/tom.webp" name="Tom Harris" title="Conception site web" resume="“Super projet commun”" delay={0.5}/>
                <Developper image="/images/sunly.webp" name="Sunly Hor" title="Projet global" resume="“Très disponible et efficace”" delay={0.75} />
            </Box>
        </Box>
    )
}

export default IndexDevelopper
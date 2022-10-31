import Image from "next/image";
import Link from "next/link";
import { Box, Button, Heading, Text, Icon } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from 'react-icons/bs';


const IndexHome = () => {
    return (
        <Box id="siny-home" display="flex" flexDirection={{ sm: "column", lg: "row"}} justifyContent="center" alignItems="center" mx="10vw">
            <Box display="flex" flexDirection="column" alignSelf={{ lg: "start" }} w={{sm: "100%", lg: "50%"}} pt="10%">
                <Heading className="siny-title" color="blue.700" textAlign={{sm: "center", lg: "start" }} as="h1" size={{sm: "xl", xl: "2xl", '2xl': "3xl"}}  letterSpacing="-2px">
                    La conception web pour les entreprises de demain.
                </Heading>
                <Text color="gray.500" fontSize={{sm: "lg", xl: "lg", '2xl': "xl"}} textAlign={{ sm: "center", lg: "start" }} letterSpacing="-1px" pt="0.5em">
                    L&apos;équipe Siny vous accompagne dans votre projet web et dans sa réussite.
                    De votre stratégie digitale à la conception de votre site internet, une personnalisation de notre service en fonction de votre projet.
                </Text>
                <Box display="flex" flexDirection={{sm: "column", lg: "row"}} alignItems={{sm: "center", lg: "start"}} pt="1em">
                    <Link href="/contact">
                        <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1.5em"}}>
                            <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">Prendre contact</Text>
                            <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="white.500"/>
                        </Button>
                    </Link>
                    <Link href="/projects">
                        <Button display="flex" justifyContent="space-between" alignItems="center" colorScheme='gray' ml={{lg: "1em"}} mt={{sm: "0.5em" , lg: "inherit"}} p={{sm: "0.5em", lg: "1.5em"}} >
                            <Text fontSize={{sm: "sm", xl: "lg"}} color="white.500" fontWeight="lighter">Nos réalisations</Text>
                            <Icon as={BsArrowRightCircle} w={5} h={5} mx="0.5em" color="white.500"/>
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" w={{sm: "100%", lg: "50%"}} ml={{lg: "-5%"}}>
                <Image
                    src="/images/shape.webp"
                    height={850}
                    width={850}
                    alt="Man working on his computer"
                />
            </Box>
        </Box>
    )
}

export default IndexHome
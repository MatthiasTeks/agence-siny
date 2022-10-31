import Image from "next/image";
import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from 'react-icons/bs';

const ProjectsHome = () => {
    return (
        <Box id="siny-home" display="flex" flexDirection={{ sm: "column", lg: "row"}} justifyContent="center" alignItems="center" mx="10vw">
            <Box display={{sm: "none", lg: "flex"}} flexDirection="column" alignItems="center" w={{sm: "100%", lg: "50%"}} >
                <Image
                    src="/images/shape_agency.png"
                    height={850}
                    width={850}
                    alt="Man working on his computer"
                />
            </Box>
            <Box display="flex" flexDirection="column" alignSelf={{ lg: "start" }} w={{sm: "100%", lg: "50%"}} pt="10%" ml={{lg: "5%"}}>
                <Heading color="blue.700" textAlign={{sm: "center", lg: "end" }} as="h1" size={{sm: "xl", xl: "2xl", '2xl': "3xl"}} letterSpacing="-2px" >
                    Chacune de nos réalisation est unique, car chaque entreprise est différente.
                </Heading>
                <Text color="gray.500" fontSize={{sm: "lg", xl: "lg", '2xl': "xl"}} textAlign={{ sm: "center", lg: "end" }} letterSpacing="-1px" pt="0.5em">
                    Avant d&apos;entamer chaque projet nous vous proposons des maquettes graphiques en fonction de vos besoins et de vos attentes.
                </Text>
                <Box display="flex" flexDirection={{sm: "column", lg: "row"}} justifyContent="end" alignItems={{sm: "center", lg: "start"}} pt="1em">
                    <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1.5em"}}>
                        <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">Prendre contact</Text>
                        <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="white.500"/>
                    </Button>
                    <Button display="flex" justifyContent="space-between" alignItems="center" colorScheme='gray' ml={{lg: "1em"}} mt={{sm: "0.5em" , lg: "inherit"}} p={{sm: "0.5em", lg: "1.5em"}}>
                        <Text fontSize={{sm: "sm", xl: "lg"}} color="white.500" fontWeight="lighter">Nos réalisations</Text>
                        <Icon as={BsArrowRightCircle} w={5} h={5} mx="0.5em" color="white.500"/>
                    </Button>
                </Box>
            </Box>
            <Box display={{sm: "flex", lg: "none"}} flexDirection="column" alignItems="center" w={{sm: "100%", lg: "50%"}} >
                <Image
                    src="/images/shape_agency.png"
                    height={850}
                    width={850}
                    alt="Man working on his computer"
                />
            </Box>
        </Box>
    )
}

export default ProjectsHome
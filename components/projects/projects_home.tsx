import Image from "next/image";
import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from 'react-icons/bs';
import Link from "next/link";

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
                    Chacune de nos réalisations est unique, car chaque entreprise est différente
                </Heading>
                <Text color="gray.500" fontSize={{sm: "lg", xl: "lg", '2xl': "xl"}} textAlign={{ sm: "center", lg: "end" }} letterSpacing="-1px" pt="0.5em">
                    La satisfaction client étant notre principale motivation, nous nous engageons à vous fournir des maquettes avant la phase de production.
                 </Text>
                <Box display="flex" flexDirection={{sm: "column", lg: "row"}} justifyContent="end" alignItems={{sm: "center", lg: "start"}} pt="1em">
                    <Link href="/contact">
                        <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1.5em"}}>
                            <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">Prendre contact</Text>
                            <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="white.500"/>
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button display="flex" justifyContent="space-between" alignItems="center" colorScheme='gray' ml={{lg: "1em"}} mt={{sm: "0.5em" , lg: "inherit"}} p={{sm: "0.5em", lg: "1.5em"}}>
                            <Text fontSize={{sm: "sm", xl: "lg"}} color="white.500" fontWeight="lighter">Nos services</Text>
                            <Icon as={BsArrowRightCircle} w={5} h={5} mx="0.5em" color="white.500"/>
                        </Button>
                    </Link>
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
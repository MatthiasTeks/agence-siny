import Link from "next/link";
import { Box, Icon, Text } from "@chakra-ui/react";
import { SiTwitter } from "react-icons/si";
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';

const Burger = ({burgerOpen}: { burgerOpen: boolean }) => {
    return (
        <Box id="burger" className={`siny-burger ${burgerOpen ? 'burger-active' : ''}`}>
            { burgerOpen &&
                <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="start" height="100vh" px="10vw">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start" w="100%">
                        <Box className="burger-box" w="100%">
                            <Link href="/">
                                <Text fontSize='xl' color="white.500" pt="1em">Services</Text>
                            </Link>
                            <hr className="burger-hr"/>
                        </Box>
                        <Box className="burger-box" w="100%">
                            <Link href="/projects" >
                                <Text fontSize='xl' color="white.500" pt="1em">Réalisations</Text>
                            </Link>
                            <hr className="burger-hr"/>
                        </Box>
                        <Box className="burger-box" w="100%">
                            <Link href="/contact" >
                                <Text fontSize='xl' color="white.500" pt="1em">Contact</Text>
                            </Link>
                            <hr className="burger-hr"/>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" w="100%">
                        <Box className="burger-holder-social" display="flex" flexDirection="row" justifyContent="center" alignItems="center" pb="1em" w="100%">
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w={10} h={10} bg="white.500" mx="0.25em" borderRadius="12px">
                                <Icon as={SiTwitter} w={6} h={6} color="blue.600" />
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w={10} h={10} bg="white.500" mx="0.25em" borderRadius="12px">
                                <Icon as={GrLinkedinOption} w={6} h={6} color="blue.600" />
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w={10} h={10} bg="white.500" mx="0.25em" borderRadius="12px">
                                <Icon as={AiOutlineGoogle} w={6} h={6} color="blue.600" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default Burger
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Box, Text, Button, Heading, Icon } from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';


const Burger = ({burgerOpen, setBurgerOpen}: { burgerOpen: boolean, setBurgerOpen: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <Box id="navbar" display="flex" justifyContent={{sm: "space-between", lg: "inherit"}} alignItems="center" py="1rem" px="3rem" h="15vh" w="100vw">
            <Box display="block" w={{sm: "30vw", lg: "10vw"}}>
                <Image
                    src="/images/logo.webp"
                    layout="responsive"
                    height={56}
                    width={175}
                    alt="Siny Agency Logo"
                />
            </Box>
            <Box display={{sm: "none", lg: "flex"}} alignItems="center" flexGrow="1" ml={6}>
                <Link href="/agency">
                    <Heading fontSize='xl' color="blue.700" as="b">l&apos;agence</Heading>
                </Link>
                <Link href="/projects">
                    <Heading fontSize='xl' ml={4} color="blue.700" as="b">nos réalisations</Heading>
                </Link>
            </Box>
            <Button display={{sm: "none", lg: "flex"}} colorScheme='blue' p="1.5em">
                <Text fontSize='lg' fontWeight="lighter">Prendre contact</Text>
            </Button>
            <Icon className={`burger-siny-icon ${burgerOpen ? 'burger-icon-active' : ''}`} as={BiMenuAltRight} display={{sm: "block", lg: "none" }} w={8} h={8} mx="0.5em" zIndex="11" onClick={() => setBurgerOpen(!burgerOpen)}/>
        </Box>
    )
}

export default Burger
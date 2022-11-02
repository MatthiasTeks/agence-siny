import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Text, Button, Heading, Icon } from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';

const Burger = ({burgerOpen, setBurgerOpen}: { burgerOpen: boolean, setBurgerOpen: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <Box id="navbar" display="flex" justifyContent={{sm: "space-between", lg: "inherit"}} alignItems="center" py="1rem" px="3rem" h="15vh" w="100vw">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0}} viewport={{ once: true }}>
                <Link href="/">
                    <Box display="block" w={{sm: "30vw", lg: "10vw"}} cursor="pointer">
                        <Image
                            src="/images/logo_siny.webp"
                            layout="responsive"
                            height={56}
                            width={175}
                            sizes=" (min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                            alt="Siny Agency Logo"
                        />
                    </Box>
                </Link>
            </motion.div>
            <Box display={{sm: "none", lg: "flex"}} alignItems="center" flexGrow="1" ml={6}>
                <Link href="/services">
                    <Heading fontSize={{sm: 'xl', '2xl': "2xl"}} color="blue.700" as="b" cursor="pointer">nos services</Heading>
                </Link>
                <Link href="/projects">
                    <Heading fontSize={{sm: 'xl', '2xl': "2xl"}} ml={4} color="blue.700" as="b" cursor="pointer">nos réalisations</Heading>
                </Link>
            </Box>
            <Button display={{sm: "none", lg: "flex"}} colorScheme='blue' p="1.5em">
                <Link href="/contact">
                    <Text fontSize='lg' fontWeight="lighter">Prendre contact</Text>
                </Link>
            </Button>
            <Icon className={`burger-siny-icon ${burgerOpen ? 'burger-icon-active' : ''}`} as={BiMenuAltRight} display={{sm: "block", lg: "none" }} w={8} h={8} mx="0.5em" zIndex="11" onClick={() => setBurgerOpen(!burgerOpen)}/>
        </Box>
    )
}

export default Burger
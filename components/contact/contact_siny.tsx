import Image from "next/image";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const ContactSiny = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box display="block" w={{sm: "30vw", lg: "10vw"}} cursor="pointer">
                <Image
                    src="/images/logo.webp"
                    layout="responsive"
                    height={56}
                    width={175}
                    sizes=" (min-width: 60em) 24vw,
                        (min-width: 28em) 45vw,
                        100vw"
                    alt="Siny Agency Logo"
                />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" borderRadius="22px" border="1px" borderColor="gray.500" p="2em">
                <Heading color="blue.700" textAlign="center" as="h1" size={{sm: "sm", xl: "md"}}  letterSpacing="-1px">
                    Nos solutions digitales
                </Heading>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Icon color="green.300" as={AiFillCheckCircle} ml="0.25em"/>
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter">Conception web</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Icon color="green.300" as={AiFillCheckCircle} ml="0.25em"/>
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter">Conseil digital</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Icon color="green.300" as={AiFillCheckCircle} ml="0.25em"/>
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter">Image de marque</Text>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Heading color="blue.700" textAlign="center" as="h1" size={{sm: "sm", xl: "md"}}  letterSpacing="-1px">
                    Contactez nous directement
                </Heading>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter">par téléphone : 07 69 11 99 42 </Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter">par mail : matthias@sinyagence.com </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactSiny
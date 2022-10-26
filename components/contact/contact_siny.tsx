import Image from "next/image";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const ContactSiny = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="start" h="75%" w="50%">
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
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start" borderRadius="22px" border="1px" borderColor="rgb(224 227 231)" p="2em" mt="2em">
                <Heading color="blue.700" textAlign="center" as="h1" size={{sm: "sm", xl: "md"}}  letterSpacing="-1px">
                    Nos solutions digitales
                </Heading>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" pt="0.5em">
                    <Icon color="blue.500" as={AiFillCheckCircle} ml="0.25em"/>
                    <Text fontSize={{sm: "sm", xl: "md"}} fontWeight="lighter" pl="0.5em" color="gray.500">Conception web</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" pt="0.5em">
                    <Icon color="blue.500" as={AiFillCheckCircle} ml="0.25em"/>
                    <Text fontSize={{sm: "sm", xl: "md"}} fontWeight="lighter" pl="0.5em" color="gray.500">Conseil digital</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" pt="0.5em">
                    <Icon color="blue.500" as={AiFillCheckCircle} ml="0.25em"/>
                    <Text fontSize={{sm: "sm", xl: "md"}} fontWeight="lighter" pl="0.5em" color="gray.500">Image de marque</Text>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="end" alignItems="start" flexGrow="1" pb="2em">
                <Heading color="blue.700" textAlign="center" as="h1" size={{sm: "sm", xl: "md"}}  letterSpacing="-1px">
                    Contactez nous directement
                </Heading>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter" color="gray.500">par téléphone : 07 69 11 99 42 </Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Text fontSize={{sm: "sm", xl: "sm"}} fontWeight="lighter" color="gray.500">par mail : matthias@sinyagence.com </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactSiny
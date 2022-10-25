import { NextPage } from "next";
import Head from "next/head";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Icon,
    Input,
    Text
} from "@chakra-ui/react";
import Image from "next/image";
import {AiFillCheckCircle} from "react-icons/ai";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

const Agency: NextPage = () => {

    return (
        <div id="agency">
            <Head>
                <title>Siny Agency - Agency</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box position="fixed" w="100vw" h="100vh" display="flex" flexDirection={{ sm: "column", lg: "row"}} justifyContent="center" alignItems="center" mx="10vw" my="5vh">
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
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Heading color="blue.700" textAlign="left" as="h1" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px">
                                Discuter avec notre équipe.
                            </Heading>
                            <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">
                                Posez des questions, apprenez-en davantage sur notre solution et lancez votre projet digital.
                            </Text>
                        </Box>
                        <Box id="siny-developper" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                            <Image
                                src={"/images/matthias.png"}
                                layout="fixed"
                                height={60}
                                width={60}
                                alt="team member"
                            />
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <FormControl isRequired>
                            <FormLabel>Nom complet</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Adresse mail</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <FormControl isRequired>
                            <FormLabel>Entreprise</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Télephone</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                    </Box>
                    <Checkbox>Checkbox</Checkbox>
                    <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1.5em"}}>
                        <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">Envoyer le message</Text>
                        <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="white.500"/>
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Agency
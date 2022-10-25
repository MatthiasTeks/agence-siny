import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";

const AgencyStrength = () => {
    return (
        <Box id="siny-project" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="#D8EEFE" borderRadius="32px" mt="1em" py="5em">
            <Heading color="blue.700" textAlign="center" as="h2" size={{sm: "xl", xl: "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}} w="70%">
                Un service transparent, une communication fluide, un client satisfait.
            </Heading>
            <Text color="gray.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign="center" letterSpacing="-1px" pt="0.5em" px={{sm: "1em", xl: "0"}}>
                Fini les termes techniques incompréhensible et les prestations floues sur vos devis.
            </Text>
            <Box display="flex" flexDirection={{sm: "column", lg: "row"}} justifyContent="center" alignItems="center" bg="white.500" mx={{sm: "2em", md: "5em"}} my="3em" py="3em" px="1em" borderRadius="24px">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5}} viewport={{ once: true }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image
                            src="/images/customer-client.png"
                            height={80}
                            width={80}
                            alt="Man working on his computer"
                        />
                        <Heading color="blue.700" textAlign="center" as="h3" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px" pt="1em">
                            Relation Client
                        </Heading>
                        <Text color="gray.500" fontSize={{sm: "sm", xl: "lg"}} textAlign={{ sm: "center" }} letterSpacing="-1px" pt="0.5em" w="70%">
                            Des rendez-vous clés pour vous permettre de suivre l’avancement de votre projet.
                        </Text>
                    </Box>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.25}} viewport={{ once: true }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{sm: "2em", lg: "0"}}>
                        <Image
                            src="/images/transparence.png"
                            height={80}
                            width={80}
                            alt="Man working on his computer"
                        />
                        <Heading color="blue.700" textAlign={{sm: "center", lg: "start" }} as="h3" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px"  pt="1em">
                            Transparence
                        </Heading>
                        <Text color="gray.500" fontSize={{sm: "sm", xl: "lg"}} textAlign={{ sm: "center" }} letterSpacing="-1px" pt="0.5em" w="70%">
                            Une clarté sur nos services et sur l’ensemble de nos actions.
                        </Text>
                    </Box>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5}} viewport={{ once: true }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{sm: "2em", lg: "0"}}>
                        <Image
                            src="/images/unique.png"
                            height={80}
                            width={80}
                            alt="Man working on his computer"
                        />
                        <Heading color="blue.700" textAlign={{sm: "center", lg: "start" }} as="h3" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px"  pt="1em">
                            Produit Unique
                        </Heading>
                        <Text color="gray.500" fontSize={{sm: "sm", xl: "lg"}} textAlign={{ sm: "center" }} letterSpacing="-1px" pt="0.5em" w="70%">
                            Un site web unique et exclusif, fini les copier coller et les templates WordPress.
                        </Text>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
}

export default AgencyStrength
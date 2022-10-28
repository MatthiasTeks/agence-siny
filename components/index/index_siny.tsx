import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const IndexSiny = () => {
    return (
        <Box id="siny-project" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="#D8EEFE" borderRadius="32px" mt="1em" py="5em">
            <Heading color="blue.700" textAlign="center" as="h2" size={{sm: "xl", xl: "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Siny au coeur de votre projet
            </Heading>
            <Text color="gray.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign="center" letterSpacing="-1px" pt="0.5em" px={{sm: "1em", xl: "0"}}>
                De la conception web jusqu’à la réflexion de votre stratégie digitale, l’équipe Siny est à vos côtés.
            </Text>
            <Box display="flex" flexDirection={{sm: "column", lg: "row"}} justifyContent="center" alignItems="center" bg="white.500" mx={{sm: "2em", md: "5em"}} my="3em" py="3em" px="1em" borderRadius="24px">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5}} viewport={{ once: true }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image
                        src="/images/ordinateur.png"
                        height={80}
                        width={80}
                        alt="Man working on his computer"
                    />
                    <Heading color="blue.700" textAlign="center" as="h3" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px" pt="1em">
                        Conception Web
                    </Heading>
                    <Text color="gray.500" fontSize={{sm: "sm", xl: "lg"}} textAlign={{ sm: "center" }} letterSpacing="-1px" pt="0.5em" w="70%">
                        Un site web performant, intuitif et moderne répondant a vos demandes.
                    </Text>
                </Box>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.25}} viewport={{ once: true }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{sm: "2em", lg: "0"}}>
                    <Image
                        src="/images/art.png"
                        height={80}
                        width={80}
                        alt="Man working on his computer"
                    />
                    <Heading color="blue.700" textAlign={{sm: "center", lg: "start" }} as="h3" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px"  pt="1em">
                        Image de Marque
                    </Heading>
                    <Text color="gray.500" fontSize={{sm: "sm", xl: "lg"}} textAlign={{ sm: "center" }} letterSpacing="-1px" pt="0.5em" w="70%">
                        Une image de marque moderne et cohérente pour dynamiser votre force marketing.
                    </Text>
                </Box>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5}} viewport={{ once: true }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{sm: "2em", lg: "0"}}>
                    <Image
                        src="/images/strategie.png"
                        height={80}
                        width={80}
                        alt="Man working on his computer"
                    />
                    <Heading color="blue.700" textAlign={{sm: "center", lg: "start" }} as="h3" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px"  pt="1em">
                        Stratégie Digital
                    </Heading>
                    <Text color="gray.500" fontSize={{sm: "sm", xl: "lg"}} textAlign={{ sm: "center" }} letterSpacing="-1px" pt="0.5em" w="70%">
                        Un audit complet de l&apos;implantation digitale de votre entreprise.
                    </Text>
                </Box>
                </motion.div>
            </Box>
        </Box>
    )
}

export default IndexSiny
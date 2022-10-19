import { motion } from "framer-motion";
import {Box, Heading, Icon, Text} from "@chakra-ui/react";
import Image from "next/image";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

const IndexConcevoir = () => {
    return (
        <Box id="siny-concevoir" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="#90b4ce25" borderRadius="32px" mt="1em" pt="5em">
            <Heading color="blue.700" textAlign="center" as="h2" size={{sm: "xl", xl: "2xl"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                Concevoir une application web intuitive et perenne.
            </Heading>
            <Text color="gray.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                Siny met un point d’honneur à faire preuve de transparence et à travailler de pair avec vous pour vous guider au mieux vers la réalisation d’un site internet moderne répondant à vos demandes.
            </Text>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%" pt="1em">
                <Text color="gray.500" fontSize={{sm: "lg", xl: "2xl"}} textAlign="center" letterSpacing="-1px" >
                    Nous contacter
                </Text>
                <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="red.500"/>
            </Box>
            <Box id="siny-concevoir-panel" display="flex" flexDirection="row" justifyContent="center" alignItems="end" width="100%" height="100%" pt="2em" px="2em">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5}} viewport={{ once: true }}>
                    <Image
                        src="/images/panel-admin.png"
                        layout="intrinsic"
                        height={410}
                        width={745}
                        alt="image from panel admin Siny Agency"
                    />
                </motion.div>
            </Box>
        </Box>
    )
}

export default IndexConcevoir
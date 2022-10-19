import { motion } from "framer-motion";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { ReseauxType } from "../../../global/types";

const Reseaux = (props: ReseauxType) => {
    return (
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 0.5, delay: props.delay}} viewport={{ once: true }}>
            <Box className="siny-developper" display="flex" flexDirection="row" justifyContent="start" alignItems="center" bg="#FFFFFE" position="relative" borderRadius="12px" my="1em" width={{sm: "300px", md: "400px"}} height="70px">
                <Box display="flex" flexDirection="row" justifyContent="start" alignItems="center" pl="3em">
                    <Image
                        src={props.image}
                        layout="fixed"
                        height={40}
                        width={40}
                        alt={`image representing ${props.title}`}
                    />
                    <Heading color="blue.700" as="h4" size={{sm: "sm", lg: "md"}} pl="2em">{props.title}</Heading>
                </Box>
            </Box>
        </motion.div>
    )
}

export default Reseaux
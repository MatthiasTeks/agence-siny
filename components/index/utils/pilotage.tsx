import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { PilotageType } from "../../../global/types";

const Pilotage = (props: PilotageType) => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.5, delay: props.delay}} viewport={{ once: true }}>
            <Box className="siny-developper" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#FFFFFE" position="relative" borderRadius="26px" mx="1em" width="250px" height="250px" mt="2em">
                <Image
                    src={props.image}
                    layout="fixed"
                    height={60}
                    width={60}
                    alt={`image representing ${props.title}`}
                />
                <Heading color="blackAlpha.800" as="h4" size={{sm: "sm", lg: "md"}} pt="0.5em">{props.title}</Heading>
                <Text color="blackAlpha.800" fontSize={{sm: "sm", lg: "lm"}} textAlign={{ sm: "center" }} letterSpacing="-1px" width="70%" pt="0.5em">
                    {props.resume}
                </Text>
            </Box>
        </motion.div>
    )
}

export default Pilotage
import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { AiFillCheckCircle } from 'react-icons/ai';
import { DevelopperType } from "../../../global/types";

const Developper = (props: DevelopperType) => {
    return (
        <Box className="siny-developper" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" width={{sm: "250px", lg: "300px"}} height="100px" bg="#FFFFFE" position="relative" borderRadius="8px" mx="1em" mt={{sm: "2em", xl: "0em"}}>
            <Image
                src={props.image}
                layout="fixed"
                height={45}
                width={45}
                alt={`image representing ${props.title}`}
            />
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start">
                <Heading color="blue.700" as="h4" size={{sm: "sm", lg: "md"}}>{props.name}</Heading>
                <Text color="red.500" fontSize={{sm: "sm", lg: "lm"}} textAlign={{ sm: "center" }} letterSpacing="-1px">
                    {props.title}
                </Text>
                <Text color="gray.500" fontSize={{sm: "sm", lg: "lm"}} textAlign={{ sm: "left" }} letterSpacing="-1px">
                    {props.resume}
                </Text>
            </Box>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.5, delay: props.delay}} viewport={{ once: true }}>
                <Box position="absolute" top={"-1em"} right={"-1em"} bg="white.500" w={5} h={5}>
                    <Icon w={10} h={10} color="#90b4ce" as={AiFillCheckCircle} position="absolute" top="0" left="0" transform="translate(-25%, -25%)"/>
                </Box>
            </motion.div>

        </Box>
    )
}

export default Developper
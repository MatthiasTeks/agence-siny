import { motion } from "framer-motion";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { AccordionType } from "../../../global/types";

const Accordion = (props: AccordionType) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white.500" borderRadius="22px" w="500px" my="0.5em">
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Text color="blue.700" textAlign="left" fontSize={{sm: "md", xl: "2xl"}}  letterSpacing="-1px" >
                    {props.title}
                </Text>
                <Icon as={props.accordion === props.index ? AiOutlineMinus : AiOutlinePlus} w={5} h={5} mx="0.5em" color="blue.700" onClick={() => props.setAccordion(props.index)}/>
            </Box>
            <Box className={`accordion ${props.accordion === props.index ? "accordion-active" : ""}`} flexDirection="row" justifyContent="center" alignItems="center">
                <Text color="blue.700" textAlign="center" fontSize={{sm: "md", xl: "lg"}}  letterSpacing="-1px" px="6em" py="0.5em">
                    {props.resume}
                </Text>
            </Box>
        </Box>
    )
}

export default Accordion
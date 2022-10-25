import Image from "next/image";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { AiFillCheckCircle } from 'react-icons/ai';
import { MarqueeServicesTypes } from "../../../global/types";

const MarqueeService = (props: MarqueeServicesTypes) => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mx="3em">
            <Image
                src={props.image}
                layout="fixed"
                height={100}
                width={100}
                alt={`image representing ${props.title}`}
            />
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start">
                <Heading color="blue.700" as="h4" size={{sm: "sm", lg: "md"}}>{props.title}</Heading>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Text color="gray.500" fontSize={{sm: "sm", lg: "lm"}} textAlign={{ sm: "center" }} letterSpacing="-1px">
                        {props.resume}
                    </Text>
                    <Icon color="green.300" as={AiFillCheckCircle} ml="0.25em"/>
                </Box>
            </Box>
        </Box>
    )
}

export default MarqueeService
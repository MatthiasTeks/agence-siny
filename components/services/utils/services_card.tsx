import Link from "next/link";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { CardType } from "../../../global/types";

const ServicesCard = (props: CardType) => {
    return (
        <Box id="services-card" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" bg="white.500" borderRadius="32px" py="2em" mx="1em" my="2em" width={{sm: "250px", lg: "350px"}} height="400px">
            <Heading color="blue.700" textAlign="center" as="h2" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px" px={{sm: "1em", xl: "0"}}>
                    {props.title}        
            </Heading>
            <Text color="gray.500" fontSize={{sm: "sm", xl: "md"}} textAlign="center" letterSpacing="-1px">
                {props.name}
            </Text>
            <Heading display="flex" justifyContent="center" alignItems="center" color="blue.700" textAlign="center" as="h2" size={{sm: "md", xl: "lg"}}  letterSpacing="-1px" pt="0.5em">
                    {props.price} <span style={{fontSize: "12px", display: props.isMonth ? "none" : "inherit", paddingLeft: "0.5em"}}>H.T.</span><span style={{fontSize: "12px", display: props.isMonth ? "inherit" : "none", paddingLeft: "0.5em"}}>/mois</span>      
            </Heading>
            <Text color="gray.500" fontSize={{sm: "sm", xl: "md"}} textAlign="center" letterSpacing="-1px" pt="1em" width="70%">
                {props.resume}
            </Text>
            <Link href="/contact">
                <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1em"}} mt="1em">
                    <Text fontSize={{sm: "sm", xl: "md"}} fontWeight="lighter" letterSpacing="-1px">ça m&apos;interesse</Text>
                </Button>
            </Link>
        </Box>
    )
}

export default ServicesCard
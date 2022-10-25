import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const IndexMerch = () => {
    return (
        <Box id="siny-merch" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" bg="#D8EEFE" borderRadius="32px" mt="1em" py="5em">
            <Heading color="blue.700" textAlign="center" as="h3" size={{sm: "sm", md: "md", xl: "lg"}}  letterSpacing="-1px" width="60%">
                Prenez rendez-vous maintenant pour un premier échange et une maquette web sans frais et sans engagement.
            </Heading>
            <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1.5em"}} mt="2em">
                <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">Prendre contact</Text>
                <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="white.500"/>
            </Button>
        </Box>
    )
}

export default IndexMerch
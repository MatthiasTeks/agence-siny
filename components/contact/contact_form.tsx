import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Heading, Icon, Input, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ContactForm = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mx="10vw">
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <FormControl isRequired>
                    <FormLabel>Nom complet</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Adresse mail</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <FormControl isRequired>
                    <FormLabel>Entreprise</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Télephone</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
            </Box>
            <Checkbox>Checkbox</Checkbox>
            <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1.5em"}}>
                <Text fontSize={{sm: "sm", xl: "lg"}} fontWeight="lighter">Envoyer le message</Text>
                <Icon as={BsFillArrowRightCircleFill} w={5} h={5} mx="0.5em" color="white.500"/>
            </Button>
        </Box>
    )
}

export default ContactForm

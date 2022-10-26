import { useRef, createRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Heading, Icon, Input, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ContactForm = () => {

    const form = createRef<HTMLFormElement>();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const currentForm = form.current;

        if(currentForm) {
            emailjs.sendForm('service_df8v8sm', 'template_fd97p2f', currentForm, 'wvHrG9zVAq0gM5NXj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
      };

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start" pt="1em" w="100%">
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" w="100%">
                    <FormControl isRequired w="48%">
                        <FormLabel>Nom complet</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)" />
                    </FormControl>
                    <FormControl isRequired w="48%">
                        <FormLabel>Adresse mail</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)" />
                    </FormControl>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" w="100%">
                    <FormControl isRequired w="48%" pt="1em">
                        <FormLabel>Entreprise</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)" />
                    </FormControl>
                    <FormControl isRequired w="48%" pt="1em">
                        <FormLabel>Téléphone</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)"  />
                    </FormControl>
                </Box>
                <Checkbox pt="2em" alignItems="start">
                    <Text fontSize="sm" w="80%" color="gray.500">
                        J&apos;accepte la politique de confidentialité de Siny Agency et acceptez de recevoir des messages promotionnels sur ses produits et services. Vous pouvez vous désinscrire à tout moment en cliquant sur le lien figurant au bas de nos e-mails.
                    </Text>
                    </Checkbox>
                <Button display="flex" justifyContent="space-between" alignItems="center"  colorScheme='blue' p={{sm: "0.5em", lg: "1em"}} mt="2em" type="submit">
                    <Text fontSize={{sm: "sm", xl: "md"}} fontWeight="lighter">Envoyer le message</Text>
                    <Icon as={BsFillArrowRightCircleFill} w={4} h={4} mx="0.5em" color="white.500"/>
                </Button>
            </form>
        </Box>
    )
}

export default ContactForm

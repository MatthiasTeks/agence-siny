import { createRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Checkbox, FormControl, FormLabel, Icon, Input, Text, useToast } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ContactForm = () => {

    const toast = useToast()

    const form = createRef<HTMLFormElement>();
    const nameRef = createRef<HTMLInputElement>();
    const emailRef = createRef<HTMLInputElement>();
    const entrepriseRef = createRef<HTMLInputElement>();
    const phoneRef = createRef<HTMLInputElement>();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const currentForm = form.current;

        if(nameRef.current !== null && emailRef.current !== null && entrepriseRef.current !== null && phoneRef.current !== null) {

            const templateParams = {
                from_name: nameRef.current.value,
                from_email: emailRef.current.value,
                to_name: "Siny Agency Support",
                from_entreprise: entrepriseRef.current.value,
                from_phone: phoneRef.current.value
            }
                
            emailjs.send("service_df8v8sm", "template_fd97p2f", templateParams, "wvHrG9zVAq0gM5NXj")
                .then((result) => {
                    if(nameRef.current !== null && emailRef.current !== null && entrepriseRef.current !== null && phoneRef.current !== null){
                        console.log(templateParams);
                        nameRef.current.value = ""
                        emailRef.current.value = ""
                        entrepriseRef.current.value = ""
                        phoneRef.current.value = ""
                        toast({
                            title: 'Message envoyé ☀️',
                            description: "Nous reviendrons rapidement vers vous.",
                            status: 'success',
                            duration: 4500,
                            isClosable: true,
                          })
                    }}, (error) => {
                    console.log(error.text);
                });
        }
     }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start" pt="1em" w="100%">
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <Box display="flex" flexDirection={{sm: "column" , lg: "row"}} justifyContent="space-between" alignItems="center" w="100%">
                    <FormControl isRequired w={{sm: "100%" , lg: "48%"}}>
                        <FormLabel>Nom complet</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)" type="text" ref={nameRef}/>
                    </FormControl>
                    <FormControl isRequired w={{sm: "100%" , lg: "48%"}}>
                        <FormLabel>Adresse mail</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)" ref={emailRef}/>
                    </FormControl>
                </Box>
                <Box display="flex" flexDirection={{sm: "column" , lg: "row"}} justifyContent="space-between" alignItems="center" w="100%">
                    <FormControl isRequired w={{sm: "100%" , lg: "48%"}} pt="1em">
                        <FormLabel>Entreprise</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)" ref={entrepriseRef}/>
                    </FormControl>
                    <FormControl isRequired w={{sm: "100%" , lg: "48%"}} pt="1em">
                        <FormLabel>Téléphone</FormLabel>
                        <Input background="white.500" borderColor="rgb(224 227 231)"  ref={phoneRef}/>
                    </FormControl>
                </Box>
                <Checkbox pt="2em" alignItems="start" isRequired={true}>
                    <Text fontSize={{sm: "xs" , lg: "sm", '2xl': "md"}} w={{sm: "100%" , lg: "80%"}} color="gray.500" transform="translateY(-0.5em)">
                        J&apos;accepte la politique de confidentialité de Siny Agency et acceptez de recevoir des messages promotionnels sur ses produits et services. Vous pouvez vous désinscrire à tout moment en cliquant sur le lien figurant au bas de nos e-mails.
                    </Text>
                </Checkbox>
                <Button display="flex" justifyContent="space-between" alignItems="center" colorScheme='blue' p={{sm: "0.5em", lg: "1em"}} mt="2em" type="submit">
                    <Text fontSize={{sm: "sm", xl: "md", '2xl': "lg"}} fontWeight="lighter">Envoyer le message</Text>
                    <Icon as={BsFillArrowRightCircleFill} w={4} h={4} mx="0.5em" color="white.500"/>
                </Button>
            </form>
        </Box>
    )
}

export default ContactForm

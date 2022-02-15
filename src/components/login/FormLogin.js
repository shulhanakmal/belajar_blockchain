import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import {
    Box,
    Flex,
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    useColorModeValue,
    Center
} from "@chakra-ui/react";

const FormLogin = (props) => {
  const { handleSubmit, changeUsername, changePassword } = props;
  const mainColor = useColorModeValue("#00A18B", "#00A18B");
  const textColor = useColorModeValue("gray.400", "white");

  return (
    
    <Flex position="relative" >
      <Flex h={{ sm: "initial", md: "75vh", lg: "85vh" }} w="100%" maxW="1044px" mx="auto" justifyContent="space-between" pt={{ sm: "100px", md: "0px" }}>
        <Flex alignItems="center" justifyContent="start" >
          <Flex direction="column" w="100%" background="transparent" >
            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="20px">
                Masukkan Username dan Password Untuk login
            </Text>
            <chakra.form onSubmit={handleSubmit}>
              <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Username
                  </FormLabel>
                  <Input onChange={changeUsername} borderRadius="15px" mb="24px" fontSize="sm" type="text" placeholder="username Anda" size="lg"/>
              </FormControl>
              <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Password
                  </FormLabel>
                  <Input onChange={changePassword} borderRadius="15px" mb="24px" fontSize="sm" type="password" placeholder="password Anda" size="lg"/>
                  <Button fontSize="sm" type="submit" bg={mainColor} w="100%" h="45" mb="20px" color="white" mt="20px" _hover={{bg: "teal.200"}} _active={{bg: mainColor}}>
                      SIGN IN
                  </Button>
              </FormControl>
            </chakra.form>
          </Flex>
        </Flex>
        <Box display={{ base: "none", md: "block" }} overflowX="hidden" h="100%" w="40vw" position="absolute" right="0px">
          <Box background={textColor} w="100%" h="100%" bgSize="cover" bgPosition="50%" position="absolute" borderBottomLeftRadius="20px">
            <Flex flexDirection="row" align="center" justify="center" w="100%" h="100%">
              <Center>
                <Heading color={mainColor} fontSize="48px">
                  Login
                </Heading>
              </Center>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>

  );
};

export default reduxForm({
  form: "login",
})(FormLogin);
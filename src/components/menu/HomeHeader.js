import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  Heading,
  Spacer,
  Grid,
  FormControl,
  Input,
  Center,
  chakra,
  InputRightElement,
} from "@chakra-ui/react";
import { supabase } from "../../supabaseClient";

const Overlay = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

export default function HomeHeader() {
  const mainColor = useColorModeValue("#00A18B", "#00A18B");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setLoginState] = useState("Login");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      } else {
        window.open("/", "_self");
      }
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  const handleRegistration = async () => {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      } else {
        alert("Berhasil Terdaftar");
      }
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("#fdf2d0")} px={4} p={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link _hover={{ textDecoration: "none" }} href={"/"}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
                color={"#ed702d"}
              >
                TraceBee
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <HStack as={"nav"} spacing={4}>
            <Link
              px={10}
              py={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#ed702d"),
                color: "white",
              }}
              href={"/tentang-kami"}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
              _activeLink
            >
              <strong>Tentang Kami</strong>
            </Link>
            <Link
              px={10}
              py={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#ed702d"),
                color: "white",
              }}
              href={"/galeri"}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
            >
              <strong>Galeri</strong>
            </Link>
            <Link
              px={10}
              py={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#ed702d"),
                color: "white",
              }}
              href={"/produk"}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
            >
              <strong>Produk</strong>
            </Link>
            <Link
              px={10}
              py={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#ed702d"),
                color: "white",
              }}
              href={"/x"}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
            >
              <strong>x</strong>
            </Link>
            <Link
              px={10}
              py={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#ed702d"),
                color: "white",
              }}
              fontSize={"18px"}
              color={"#ed702d"}
              bg="#f2cca3"
              onClick={(event) => {
                event.target.value = null;
                setLoginState("Login");
                setOverlay(<Overlay />);
                onOpen();
              }}
            >
              <strong>Login</strong>
            </Link>
          </HStack>
        </Flex>
      </Box>
      <Modal isCentered isOpen={isOpen} size="xl" onClose={onClose}>
        {overlay}
        <ModalContent bg={useColorModeValue("#e2e2e2")} p="5">
          {(() => {
            if (isLogin == "Login") {
              return (
                <>
                  <ModalHeader fontSize="2xl">Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                      <div>
                        <Box
                          p="2"
                          rounded={"md"}
                          minW="100px"
                          bg="white"
                          h="43px"
                          fontSize={"18px"}
                          color={"#ed702d"}
                        >
                          <Text>
                            <strong>Email:</strong>
                          </Text>
                        </Box>
                        <Box
                          p="2"
                          mt="2"
                          rounded={"md"}
                          minW="100px"
                          h="43px"
                          bg="white"
                          fontSize={"18px"}
                          color={"#ed702d"}
                        >
                          <Text>
                            <strong>Password:</strong>
                          </Text>
                        </Box>
                      </div>
                      <div>
                        <FormControl>
                          <Input
                            p="2"
                            rounded={"md"}
                            type="email"
                            placeholder="Email Anda"
                            onChange={changeEmail}
                            h="43px"
                            bg="white"
                          />
                        </FormControl>
                        <FormControl mt="2">
                          <Input
                            p="2"
                            rounded={"md"}
                            type="password"
                            placeholder="Password Anda"
                            onChange={changePassword}
                            h="43px"
                            bg="white"
                          />
                        </FormControl>
                      </div>
                    </Grid>
                    <Center mt="4">
                      {overlay && overlay.props.id ? (
                        <Button
                          px={10}
                          py={2}
                          type="submit"
                          rounded={"md"}
                          _hover={{
                            textDecoration: "none",
                            bg: "#ed702d",
                            color: "white",
                          }}
                          fontSize={"18px"}
                          color={"#ed702d"}
                          bg="#f2cca3"
                        >
                          Login
                        </Button>
                      ) : (
                        <Button
                          px={10}
                          py={2}
                          type="submit"
                          rounded={"md"}
                          _hover={{
                            textDecoration: "none",
                            bg: "#ed702d",
                            color: "white",
                          }}
                          fontSize={"18px"}
                          color={"#ed702d"}
                          bg="#f2cca3"
                          onClick={handleSubmit}
                        >
                          Login
                        </Button>
                      )}
                    </Center>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3} mt="3">
                      <div>
                        <Link
                          py={1}
                          rounded={"md"}
                          fontSize={"16px"}
                          color={"#ed702d"}
                          onClick={(event) => {
                            event.target.value = null;
                            setLoginState("Daftar");
                          }}
                        >
                          <strong>
                            <Center>Daftar Akun</Center>
                          </strong>
                        </Link>
                      </div>
                      <div>
                        <Link
                          py={1}
                          rounded={"md"}
                          fontSize={"16px"}
                          color={"#ed702d"}
                        >
                          <strong>
                            <Center>Lupa Password</Center>
                          </strong>
                        </Link>
                      </div>
                    </Grid>
                  </ModalBody>
                </>
              );
            } else {
              return (
                <>
                  <ModalHeader fontSize="2xl">Daftar Akun</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                      <div>
                        <Box
                          p="2"
                          rounded={"md"}
                          minW="100px"
                          bg="white"
                          h="43px"
                          fontSize={"18px"}
                          color={"#ed702d"}
                        >
                          <Text>
                            <strong>Email:</strong>
                          </Text>
                        </Box>
                        <Box
                          p="2"
                          mt="2"
                          rounded={"md"}
                          minW="100px"
                          h="43px"
                          bg="white"
                          fontSize={"18px"}
                          color={"#ed702d"}
                        >
                          <Text>
                            <strong>Password:</strong>
                          </Text>
                        </Box>
                      </div>
                      <div>
                        <FormControl>
                          <Input
                            p="2"
                            rounded={"md"}
                            type="email"
                            placeholder="Masukkan Email"
                            // onChange={changeEmail}
                            h="43px"
                            bg="white"
                          />
                        </FormControl>
                        <FormControl mt="2">
                          <Input
                            p="2"
                            rounded={"md"}
                            type="password"
                            placeholder="Masukkan Password"
                            // onChange={changePassword}
                            h="43px"
                            bg="white"
                          />
                        </FormControl>
                      </div>
                    </Grid>
                    <Center mt="4">
                      {overlay && overlay.props.id ? (
                        <Button
                          px={10}
                          py={2}
                          type="submit"
                          rounded={"md"}
                          _hover={{
                            textDecoration: "none",
                            bg: "#ed702d",
                            color: "white",
                          }}
                          fontSize={"18px"}
                          color={"#ed702d"}
                          bg="#f2cca3"
                        >
                          Login
                        </Button>
                      ) : (
                        <Button
                          px={10}
                          py={2}
                          type="submit"
                          rounded={"md"}
                          _hover={{
                            textDecoration: "none",
                            bg: "#ed702d",
                            color: "white",
                          }}
                          fontSize={"18px"}
                          color={"#ed702d"}
                          bg="#f2cca3"
                          onClick={handleRegistration}
                        >
                          Daftar Akun
                        </Button>
                      )}
                    </Center>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3} mt="3">
                      <div>
                        <Link
                          py={1}
                          rounded={"md"}
                          fontSize={"16px"}
                          color={"#ed702d"}
                          onClick={(event) => {
                            event.target.value = null;
                            setLoginState("Login");
                          }}
                        >
                          <strong>
                            <Center>Login</Center>
                          </strong>
                        </Link>
                      </div>
                      <div>
                        <Link
                          py={1}
                          rounded={"md"}
                          fontSize={"16px"}
                          color={"#ed702d"}
                        >
                          <strong>
                            <Center>Lupa Password</Center>
                          </strong>
                        </Link>
                      </div>
                    </Grid>
                  </ModalBody>
                </>
              );
            }
          })()}
        </ModalContent>
      </Modal>
    </>
  );
}

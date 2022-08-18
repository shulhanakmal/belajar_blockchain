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

export default function PanenHeader() {
  const pathname = window.location.pathname;

  return (
    <>
      <Box
        ml={{ base: 0, md: 60 }}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        p={5}
        pb={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack as={"nav"} spacing={2}>
            {(() => {
              if (pathname == "/panen") {
                return (
                  <Link
                    px={10}
                    py={2}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "#ed702d",
                      color: "white",
                    }}
                    href={"/panen"}
                    fontSize={"18px"}
                    color={"white"}
                    bg="#ed702d"
                  >
                    <strong>Panen</strong>
                  </Link>
                );
              } else {
                return (
                  <Link
                    px={10}
                    py={2}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "#ed702d",
                      color: "white",
                    }}
                    href={"/panen"}
                    fontSize={"18px"}
                    color={"#ed702d"}
                    bg="#f2cca3"
                  >
                    <strong>Panen</strong>
                  </Link>
                );
              }
            })()}
            {(() => {
              if (pathname == "/ekstraksi") {
                return (
                  <Link
                    px={10}
                    py={2}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "#ed702d",
                      color: "white",
                    }}
                    href={"/ekstraksi"}
                    fontSize={"18px"}
                    color={"white"}
                    bg="#ed702d"
                  >
                    <strong>Ekstraksi</strong>
                  </Link>
                );
              } else {
                return (
                  <Link
                    px={10}
                    py={2}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: "#ed702d",
                      color: "white",
                    }}
                    href={"/ekstraksi"}
                    fontSize={"18px"}
                    color={"#ed702d"}
                    bg="#f2cca3"
                  >
                    <strong>Ekstraksi</strong>
                  </Link>
                );
              }
            })()}
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

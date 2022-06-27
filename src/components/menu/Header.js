import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { supabase } from "../../supabaseClient";

export default function Header({ session }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mainColor = useColorModeValue("#00A18B", "#00A18B");

  useEffect(() => {}, [session]);

  const handleLogout = () => {
    supabase.auth.signOut();
    window.open("/", "_self");
  };

  return (
    <>
      <Box
        w="full"
        pos="fixed"
        bg={useColorModeValue("#fdf2d0")}
        px={4}
        p={5}
        zIndex="2"
        h="8vw"
      >
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
            <Avatar bg="#ed702d" size={"sm"} />
            <Text color="#333">{session.user.email}</Text>
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
              onClick={handleLogout}
            >
              <strong>Logout</strong>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

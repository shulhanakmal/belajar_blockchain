import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Checkbox,
  Text,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Center,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Grid,
} from "@chakra-ui/react";

export default function TentangKami() {
  return (
    <>
      <Flex
        bg={useColorModeValue("#fdf2d0")}
        align="center"
        justify="center"
        css={{
          backgroundAttachment: "fixed",
        }}
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Box
                  bg={useColorModeValue("#fcecba")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                  minW="90vw"
                >
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <div>
                      <Heading
                        fontSize={{
                          base: "2xl",
                          md: "3xl",
                        }}
                        color={"#ed702d"}
                      >
                        Tentang Kami
                      </Heading>
                      <Box
                        p="2"
                        mt="10"
                        minW="100px"
                        minH="100px"
                        bg={useColorModeValue("#f0c28a")}
                      >
                        <Text>Foto</Text>
                      </Box>
                    </div>
                    <div>
                      <Heading
                        fontSize={{
                          base: "xl",
                          md: "2xl",
                        }}
                        color={"#ed702d"}
                      >
                        Bee 8 Farm & Komunitas Peternak Lebah Priangan
                      </Heading>
                      <Heading
                        fontSize={{
                          base: "lg",
                          md: "lg",
                        }}
                        mt={"50"}
                        color={"#ed702d"}
                      >
                        Bee 8 Farm
                      </Heading>
                      <Text>
                        salah satu peternakan lebah dan juga menjadi pusat
                        produksi madu dan propolis Komunitas Peternak Lebah
                        Priangan.
                      </Text>
                      <Text>...</Text>
                      <Heading
                        fontSize={{
                          base: "lg",
                          md: "lg",
                        }}
                        mt={"50"}
                        color={"#ed702d"}
                      >
                        Komunitas Peternak Lebah Priangan
                      </Heading>
                      <Text>
                        terdiri dari x peternak lebah dengan total y peternakan
                        yang tersebar di Jawa Barat.
                      </Text>
                      <Heading
                        fontSize={{
                          base: "lg",
                          md: "lg",
                        }}
                        mt={"50"}
                        color={"#ed702d"}
                      >
                        Visi & Misi
                      </Heading>
                      <Text>...</Text>
                    </div>
                  </Grid>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

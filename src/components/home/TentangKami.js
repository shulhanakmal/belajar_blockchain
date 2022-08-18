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
import Piechart from "../dashboard/Piechart";
import Map from "../dashboard/Map";

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
          m={{ base: 5, md: 16, lg: 5 }}
          p={{ base: 5, lg: 5 }}
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
                  <Grid templateColumns="repeat(1, 1fr)" gap={6}>
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
                    </div>
                    <div></div>
                    <div>
                      <Heading
                        fontSize={{
                          base: "xl",
                          md: "2xl",
                        }}
                        color={"#ed702d"}
                      >
                        Bee Eight Farm & Komunitas Peternak Lebah Priangan
                      </Heading>
                    </div>
                    <div></div>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <div>
                      <Heading
                        fontSize={{
                          base: "lg",
                          md: "lg",
                        }}
                        mt={"50"}
                        color={"#ed702d"}
                      >
                        Bee Eight Farm
                      </Heading>

                      <Text>
                        Bee Eight Farm merupakan salah satu peternakan lebah di
                        Kabupatan Bandung yang juga merupakan pusat produksi
                        madu dan propolis dari Komunitas Peternak Lebah
                        Priangan. Berlokasi di Jl. Arcamanik No. 106, Desa
                        Sindanglaya, Bee Eight Farm telah memiliki puluhan stup
                        lebah trigona yang dapat menghasilkan madu dan propolis
                        berkualitas.
                      </Text>
                    </div>

                    <div>
                      {/*<Box
                        p="2"
                        mt="10"
                        minW="150px"
                        minH="100px"
                        bg={useColorModeValue("#f0c28a")}
                      >
                      <Text> Foto</Text>
                      
                      </Box> */}
                      <center>
                        <img
                          src="https://drive.google.com/uc?export=view&id=1SsSXpb4wnjJogQ0U8BThQUdozn4lDTL0"
                          alt="B8Farm_"
                          width="300px"
                          height="300px"
                          vertical-align={"middle;"}
                        />
                      </center>
                    </div>
                  </Grid>
                  <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                    <div>
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
                        Komunitasi Peternak Lebah Priangan terdiri dari 27
                        peternak lebah dengan total puluhan peternakan.
                        Peternakan kami bukan hanya berlokasi di Bandung, namun
                        kini telah tersebar di 8 kota/kabupaten di Provinsi Jawa
                        Barat. Kami membudidayakan lebah trigona berkualitas
                        pada ratusan stup lebah. Hal ini yang menyebabkan lebah
                        yang kami budidaya dapat menghasilkan madu dan propolis
                        yang manfaatnya dapat dirasakan konsumen secara nyata.
                        Produk madu dan propolis lebah trigona bermanfaat tak
                        hanya untuk suplemen kesehatan, namun juga bermanfaat di
                        bidang kosmetik.
                      </Text>
                    </div>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <div>
                      {/**ini buat tempat peta/pie chart peternakan (1)
                      <img src="https://drive.google.com/uc?export=view&id=1UNx6ot-NeHU7I414oFaftsZw-5SR-UxT" alt="ukuran lebah" width="300px" height="300px" />*/}
                      <center>
                        <b>
                          <h1 color={"#ed702d;"}>Data Peternakan</h1>
                        </b>
                      </center>

                      <Piechart pierad="50" piefont="12px" />
                    </div>
                    <div>
                      <center>
                        <b>
                          <h1 color={"#ed702d;"}>Peta Persebaran Peternakan</h1>
                        </b>
                      </center>
                      <Map pierad="50" piefont="12px" />
                    </div>
                  </Grid>
                  <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                    <div>
                      <Heading
                        fontSize={{
                          base: "lg",
                          md: "lg",
                        }}
                        mt={"50"}
                        color={"#ed702d"}
                      >
                        Acknowledgement
                      </Heading>
                      <div>
                        <center>
                          <img
                            src="https://drive.google.com/uc?export=view&id=1u_eJpftcbTtezmj2oIVN8d0jbdchnbi0"
                            alt="logo_itb"
                            width="150px"
                            height="150px"
                            class="center"
                          />
                        </center>
                      </div>
                      <center>
                        <Text>
                          TraceBee System ini didukung oleh dana Hibah Program
                          Pengabdian Masyarakat: PEMULIHAN EKONOMI 2022,
                          Institut Teknologi Bandung.
                        </Text>
                      </center>
                    </div>
                  </Grid>

                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <div>
                      <center>
                        <img
                          src="https://drive.google.com/uc?export=view&id=1G3j8xB0urmBHJWVGWUl3-DVy75saCTWJ"
                          alt="B8Farm"
                          width="200px"
                          height="200px"
                        />
                      </center>
                      <center>
                        <Text>
                          Dr. Saladin Uttunggadewa <br></br> P2MS ITB{" "}
                        </Text>
                      </center>
                    </div>

                    <div>
                      <center>
                        <img
                          src="https://drive.google.com/uc?export=view&id=10QSHYCW-GZYOHJP-cWEyRs6L9O0_6-0k"
                          alt="B8Farm"
                          width="200px"
                          height="200px"
                        />
                      </center>
                      <center>
                        <Text>
                          Edwin Hadiana<br></br> PT Asta Berkarya Farm <br></br>{" "}
                          (Bee Eight Farm){" "}
                        </Text>
                      </center>
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

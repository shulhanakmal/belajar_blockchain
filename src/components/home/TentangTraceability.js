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
//import "./styles.css";

export default function TentangTraceability() {
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
                        Teknologi <i>Blockchain</i> dan <i>Traceability</i>
                      </Heading>
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
                      <center><img src={"/images/LebahTrigonaCarrousel4.PNG"} alt="Logo" width="1000px" Height="600px" /></center>
                    </div>
                    <div>
                      {/*} <Heading
                        fontSize={{
                          base: "xl",
                          md: "2xl",
                        }}
                        color={"#ed702d"}
                      >
                        Bee Eight Farm & Komunitas Peternak Lebah Priangan
                      </Heading>
                      <Heading
                        fontSize={{
                          base: "lg",
                          md: "lg",
                        }}
                        mt={"50"}
                        color={"#ed702d"}
                      >
                        Bee Eight Farm
                      </Heading> */}
                      <Text>
                        <b><i>Blockchain</i></b> adalah database tempat menyimpan informasi secara elektronik dalam format digital. Proses pencatatan (transaksi) pada <i>blockchain</i> dikenal aman dan terdesentralisasi. Teknologi <i>blockchain</i> menjamin ketepatan dan keamanan catatan data dan menghasilkan kepercayaan tanpa perlu pihak ketiga yang terpercaya.
                      </Text>
                      <br></br>
                      <Text>
                        Saat ini, teknologi <i>blockchain</i> digunakan untuk pencatatan ketertelusuran (<b><i>traceability</i></b>) produk propolis bernama <i>EightPropolis</i>. Proses pencatatan pada <i>blockchain</i> dilakukan untuk merekam data tanggal produksi dan pengemasan, tanggal panen, sampai informasi terkait stup asal sarang madu sumber ekstrak propolis. Dengan memanfaatkan teknologi <i>blockchain</i> ini, kami berupaya untuk transparan pada konsumen dan pelanggan dengan memberikan jaminan bahwa produk kami, khususnya <i>EightPropolis</i>, merupakan produk yang asli berasal dari lebah trigona.
Teknologi <i>blockchain</i> memungkinkan Bee Eight Farm dan Komunitas Peternak Lebah Priangan untuk menyimpan dan membuat riwayat data panen beserta produksi dan pengemasan yang anti-rusak (<i>tamper-proof</i>). Selain itu, data yang tersimpan dalam <i>blockchain</i> tersebut dapat dibagikan dan dilihat tidak hanya oleh pihak Bee Eight Farm dan anggota Komunitas Peternak Lebah Priangan, tapi juga oleh pelanggan dan konsumen. Data yang disimpan pada <i>blockchain</i> aman untuk dibagikan pada pihak-pihak terkait karena data yang tersimpan itu dapat diverifikasi dan tidak dapat rusak.
                      </Text>
                      <br></br>
                      <p>
                        Teknologi <i>blockchain</i> dapat menjaga keamanan data dan integritas data sehingga produk dari Bee Eight Farm dapat ditelusuri asal usulnya (<i>traceable</i>) dari awal produksi sampai ke tangan konsumen. Hal ini akan menumbuhkan kepercayaan dan kenyamanan konsumen dalam membeli produk Bee Eight Farm hingga tercapainya <b><i>sustainable procurement</i></b>.
                      </p>
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
